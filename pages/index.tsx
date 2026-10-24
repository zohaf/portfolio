import type { NextPage } from "next";
import { useEffect, useRef } from "react";
// @ts-ignore -- plain JS module, copy of ../design/dawn.js
import { renderDawn, hazeFilter, GRAIN_FILTER } from "../lib/dawn";

// Same sky height and scroll speed as ../explorations/dawn.html (full view):
// the strip is S frames tall; scrolling moves it from the dawn frame to the white sky.
const S = 2.6;
const PARALLAX = 0.6;

const Home: NextPage = () => {
  const defs = useRef<SVGDefsElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const paint = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const grain = useRef<HTMLDivElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    let fh = 0;
    let fw = 0;

    const onScroll = () => {
      if (!strip.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      strip.current.style.transform = `translate3d(0, ${p * (S - 1) * fh}px, 0)`;
      header.current?.classList.toggle("dark", p > 0.55);
    };

    const draw = () => {
      if (!defs.current || !strip.current || !paint.current || !canvas.current || !scroll.current) return;
      fw = window.innerWidth;
      fh = window.innerHeight;
      const pad = Math.round(fh * 0.08);
      defs.current.innerHTML = hazeFilter("haze", fh / 900) + GRAIN_FILTER;
      strip.current.style.height = `${S * fh}px`;
      scroll.current.style.height = `${fh + ((S - 1) / PARALLAX) * fh}px`;
      paint.current.style.inset = `-${pad}px`;
      // defs were just replaced: clear the filters and set them again next frame,
      // otherwise the browser keeps a reference to the removed filter elements
      const layers = [paint.current, grain.current];
      layers.forEach((el) => el && (el.style.filter = "none"));
      requestAnimationFrame(() => {
        if (paint.current) paint.current.style.filter = "url(#haze)";
        if (grain.current) grain.current.style.filter = "url(#grain)";
      });
      renderDawn(canvas.current, { fw, fh, S, pad });
      onScroll();
    };

    draw();
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      // ignore small height changes from mobile browser bars showing and hiding
      if (window.innerWidth === fw && Math.abs(window.innerHeight - fh) < 120) return;
      clearTimeout(timer);
      timer = setTimeout(draw, 200);
    };
    const onScrollFrame = () => requestAnimationFrame(onScroll);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScrollFrame, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollFrame);
    };
  }, []);

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs ref={defs} />
      </svg>
      <div className="sky" aria-hidden="true">
        <div className="strip" ref={strip}>
          <div className="paint" ref={paint}>
            <canvas ref={canvas} />
          </div>
          <div className="grain" ref={grain} />
        </div>
      </div>
      <header className="header" ref={header}>
        <h1>Zoha Fard</h1>
      </header>
      <div ref={scroll} />
    </>
  );
};

export default Home;
