// Dawn sky renderer. Decision 2026-10-23: palette A (Horizon), treatment Haze, flat horizon, softness 0.
// Source exploration: ../explorations/dawn.html

// pos 0 = bottom of the frame (ground), 1 = top of the frame; > 1 = sky above the frame, ending in white.
const STOPS = [
  [0, '#0d1018'], [0.19, '#1b151c'], [0.225, '#5a1a0e'], [0.26, '#d4501a'], [0.31, '#f3963c'], [0.37, '#f6c48c'],
  [0.45, '#eee2d6'], [0.55, '#c6dbf0'], [0.67, '#86b5e9'], [0.82, '#4b86d6'], [1, '#2a5dbd'],
  [1.35, '#4f86d4'], [1.75, '#9cc1ea'], [2.15, '#dfeaf7'], [2.5, '#ffffff'],
];
const N = 4096, SMAX = 3.2;

const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const toLin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const toGam = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.max(c, 0) ** (1 / 2.4) - 0.055);
function rgb2oklab([r, g, b]) {
  r = toLin(r); g = toLin(g); b = toLin(b);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s];
}
function oklab2rgb([L, a, b]) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s].map(toGam);
}

// Linear Oklab interpolation between stops (softness 0: no extra blur of the stops).
let lut;
function getLUT() {
  if (lut) return lut;
  const stops = STOPS.map(([p, h]) => [p, rgb2oklab(hex2rgb(h))]);
  lut = new Float32Array(N * 3);
  for (let i = 0, seg = 0; i < N; i++) {
    const s = (i / (N - 1)) * SMAX;
    while (seg < stops.length - 2 && s > stops[seg + 1][0]) seg++;
    const [p0, c0] = stops[seg], [p1, c1] = stops[Math.min(seg + 1, stops.length - 1)];
    const t = Math.min(1, Math.max(0, (s - p0) / (p1 - p0 || 1)));
    const rgb = oklab2rgb([0, 1, 2].map((c) => c0[c] + (c1[c] - c0[c]) * t));
    for (let c = 0; c < 3; c++) lut[i * 3 + c] = rgb[c] * 255;
  }
  return lut;
}

// fw, fh: frame size in CSS px. S: frames tall. pad: extra px on every side (hides displacement edges).
export function renderDawn(canvas, { fw, fh, S = 1, pad = 0 }) {
  const W = Math.round(fw + 2 * pad), H = Math.round(fh * S + 2 * pad);
  canvas.width = W; canvas.height = H;
  const table = getLUT();
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(W, H), d = img.data;
  let seed = 2463534242;
  const rnd = () => { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; return (seed >>> 0) / 4294967296; };
  for (let j = 0, o = 0; j < H; j++) {
    const s = (H - j - pad) / fh;
    const idx = Math.max(0, Math.min(N - 1, Math.round((s / SMAX) * (N - 1)))) * 3;
    for (let i = 0; i < W; i++, o += 4) {
      const n = rnd() + rnd() - 1; // ±1 level triangular dither: removes banding
      d[o] = table[idx] + n; d[o + 1] = table[idx + 1] + n; d[o + 2] = table[idx + 2] + n; d[o + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
}

// Haze: low-frequency displacement, blur, lifted blacks. k scales distances to the frame height (k = fh / 900).
export function hazeFilter(id, k) {
  const f = (v) => +v.toFixed(5);
  return `<filter id="${id}" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="${f(0.0035 / k)}" numOctaves="2" seed="7" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="${f(90 * k)}" xChannelSelector="R" yChannelSelector="G" result="d"/>
    <feGaussianBlur in="d" stdDeviation="${f(16 * k)}" result="b"/>
    <feComponentTransfer in="b"><feFuncR type="linear" slope="0.92" intercept="0.035"/><feFuncG type="linear" slope="0.92" intercept="0.035"/><feFuncB type="linear" slope="0.92" intercept="0.045"/></feComponentTransfer>
  </filter>`;
}

export const GRAIN_FILTER = `<filter id="grain" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
  <feColorMatrix type="saturate" values="0"/>
  <feComponentTransfer><feFuncR type="linear" slope="2.2" intercept="-0.6"/><feFuncG type="linear" slope="2.2" intercept="-0.6"/><feFuncB type="linear" slope="2.2" intercept="-0.6"/><feFuncA type="linear" slope="0" intercept="1"/></feComponentTransfer>
</filter>`;
