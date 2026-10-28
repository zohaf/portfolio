import type { NextPage } from "next";
import { useEffect, useRef } from "react";
// @ts-ignore -- plain JS module, copy of ../design/dawn.js
import { renderDawn, hazeFilter, GRAIN_FILTER } from "../lib/dawn";

// Profile layout from ../design/profile.html.
// The strip is S frames tall; its top frame is pure white. Scrolling moves it from the dawn frame
// to white by the time the columns reach the upper third of the screen.
const S = 3.5;

const EMAIL = "zohafard@gmail.com";

const TIMELINE = [
  {
    years: "2026 — Now",
    name: "LineupBridge",
    note: "DJ booking marketplace: product, design and engineering, concept to production.",
    role: "Product Engineer",
  },
  {
    years: "2025 — 2026",
    name: "Digistore24",
    note: "Onboarding in Next.js; navigation redesign; PostHog experiments; shared components.",
    role: "Frontend Engineer",
  },
  {
    years: "2023 — 2025",
    name: "Gotphoto",
    note: "Legacy PHP to React and Next.js; shared component library in Storybook.",
    role: "Frontend Engineer",
  },
  {
    years: "2021 — 2022",
    name: "Propps",
    note: "Next.js and GraphQL application; frontend architecture and reusable UI components.",
    role: "Software Engineer",
  },
];

const Home: NextPage = () => {
  const defs = useRef<SVGDefsElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const paint = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const grain = useRef<HTMLDivElement>(null);
  const cols = useRef<HTMLElement>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    let fh = 0;
    let fw = 0;
    let travel = 1;

    const onScroll = () => {
      if (!strip.current) return;
      const p = Math.min(1, Math.max(0, window.scrollY / travel));
      strip.current.style.transform = `translate3d(0, ${p * (S - 1) * fh}px, 0)`;
      nav.current?.classList.toggle("dark", p > 0.55);
    };

    const draw = () => {
      if (!defs.current || !strip.current || !paint.current || !canvas.current || !cols.current) return;
      fw = window.innerWidth;
      fh = window.innerHeight;
      const pad = Math.round(fh * 0.08);
      defs.current.innerHTML = hazeFilter("haze", fh / 900) + GRAIN_FILTER;
      strip.current.style.height = `${S * fh}px`;
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
      travel = Math.max(1, cols.current.offsetTop - fh * 0.3);
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

      <nav className="nav" ref={nav}>
        <span className="end">Zoha Fard</span>
        <ul>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a className="end" href={`mailto:${EMAIL}`}>
          Email
        </a>
      </nav>

      <main>
        <section className="hero row">
          <small>Profile</small>
          <div className="intro">
            <h1 className="big">I’m Zoha, a product engineer.</h1>
            <p>
              This year I delivered <a href="https://www.lineupbridge.com">LineupBridge</a>, a booking marketplace
              for DJs, as the only engineer, designer and product person, working with the founder. I decided what
              the MVP would deliver and defined the brand identity and the app’s interface. I set up the front-end
              architecture and design system so the build could change as user data changed the scope.
            </p>
            <p>
              Before that, five years in product teams at Digistore24, Gotphoto and Propps: front-end architecture
              with modern technologies, design systems in Storybook, and experiments measured with user data.
            </p>
            <p>
              Thirty-something, finally moving to Berlin &amp; I’m currently building my own app,{" "}
              <a href="https://kahkeshan.vercel.app/">kahkeshan</a>.
            </p>
          </div>
        </section>

        <section className="cols" ref={cols}>
          <div className="list">
            <small>Tools</small>
            <ul>
              <li>React, Next.js, TypeScript</li>
              <li>Storybook, design systems</li>
              <li>GraphQL, server-side rendering</li>
              <li>PostHog, A/B testing, feature flags</li>
              <li>Claude Code</li>
            </ul>
          </div>
          <div className="list">
            <small>Education</small>
            <ul>
              <li>
                Software Engineering Immersive
                <br />
                <span>General Assembly</span>
              </li>
              <li>
                Master of Architecture
                <br />
                <span>University of Newcastle</span>
              </li>
              <li>
                Bachelor of Architecture
                <br />
                <span>UNSW</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="timeline" id="timeline">
          <h2>Timeline</h2>
          <ul>
            {TIMELINE.map((t) => (
              <li key={t.name}>
                <span>{t.years}</span>
                <div>
                  <b>{t.name}</b>
                  <em>{t.note}</em>
                </div>
                <span>{t.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="links row" id="contact">
          <small>Contact</small>
          <ul>
            <li>
              <a href={`mailto:${EMAIL}`}>Email</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zohaf">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/zohaf">GitHub</a>
            </li>
          </ul>
        </section>

        <a className="contact" href={`mailto:${EMAIL}`}>
          <span>Contact</span>
          <span>↘</span>
        </a>
      </main>
    </>
  );
};

export default Home;
