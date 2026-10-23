import type { NextPage } from "next";
import { useEffect, useRef } from "react";
// @ts-ignore -- plain JS module, copy of ../design/dawn.js
import { renderDawn, hazeFilter, GRAIN_FILTER } from "../lib/dawn";

const Home: NextPage = () => {
  const defs = useRef<SVGDefsElement>(null);
  const paint = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const grain = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const draw = () => {
      if (!defs.current || !paint.current || !canvas.current) return;
      const fw = window.innerWidth;
      const fh = window.innerHeight;
      const pad = Math.round(fh * 0.08);
      defs.current.innerHTML = hazeFilter("haze", fh / 900) + GRAIN_FILTER;
      paint.current.style.inset = `-${pad}px`;
      // defs were just replaced: clear the filters and set them again next frame,
      // otherwise the browser keeps a reference to the removed filter elements
      const layers = [paint.current, grain.current];
      layers.forEach((el) => el && (el.style.filter = "none"));
      requestAnimationFrame(() => {
        if (paint.current) paint.current.style.filter = "url(#haze)";
        if (grain.current) grain.current.style.filter = "url(#grain)";
      });
      renderDawn(canvas.current, { fw, fh, pad });
    };
    draw();
    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(draw, 200);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs ref={defs} />
      </svg>
      <div className="sky" aria-hidden="true">
        <div className="paint" ref={paint}>
          <canvas ref={canvas} />
        </div>
        <div className="grain" ref={grain} />
      </div>
      <header className="header">
        <h1>Zoha Fard</h1>
      </header>
    </>
  );
};

export default Home;
