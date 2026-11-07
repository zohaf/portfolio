import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LB_AREAS, LB_LINKS, LB_SUMMARY } from "../lib/lineupbridge";
// @ts-ignore -- plain JS module, copy of ../design/dawn.js
import { renderDawn, hazeFilter, GRAIN_FILTER } from "../lib/dawn";
import External from "../components/External";

// Profile layout from ../design/profile.html.
// The strip is S frames tall; its top frame is pure white. Scrolling moves it from the dawn frame
// to white by the time the columns reach the upper third of the screen.
const S = 3.5;

const EMAIL = "zohafard@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/zohaf";

// Copies the email address; the label reads "Email copied" for 2 s.
// Falls back to a mailto link when the browser blocks clipboard access.
const CopyEmail = ({ label = "Copy my email" }: { label?: string }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" className="copy" onClick={copy} aria-live="polite">
      {copied ? "Email copied" : label}
    </button>
  );
};

type Area = { title: string; text: string };

// Every row opens to the same three areas, in this order: Product, Design engineering, Engineering.
// LineupBridge also has a summary and links; its areas live in ../lib/lineupbridge.
const TIMELINE: {
  years: string;
  name: string;
  note: string;
  role: string;
  areas: Area[];
  lineupbridge?: boolean;
}[] = [
  {
    years: "2026 — Now",
    name: "LineupBridge",
    note: "A booking marketplace for DJs, from an open brief to a first release, as the only product, design and engineering person.",
    role: "Product Engineer",
    areas: LB_AREAS,
    lineupbridge: true,
  },
  {
    years: "2025 — 2026",
    name: "Digistore24",
    note: "An established application and a large team: consistency first, then releases driven by what users say and do.",
    role: "Frontend Engineer",
    areas: [
      {
        title: "Product",
        text: "Set up event tracking and experiments so that UI and feature releases came from what users say and do. Took the onboarding from prototype to build to release.",
      },
      {
        title: "Design engineering",
        text: "With a large team and an existing design system, the fastest improvement was rules, not a rebuild: layout rules and usage guidelines that brought consistency straight away. The new navigation was designed in code, from experiment results and how the frontend uses its data.",
      },
      {
        title: "Engineering",
        text: "Defined and owned an internal platform in a monorepo, linked to the main application, that automates operational workflows for customers and support teams. Owned releases end to end, including fixes on the frontend and backend in production.",
      },
    ],
  },
  {
    years: "2023 — 2025",
    name: "Gotphoto",
    note: "A high-traffic application on a modern frontend, with a design system shaped by the code and by user data.",
    role: "Frontend Engineer",
    areas: [
      {
        title: "Product",
        text: "Worked with product, design and data on user journeys, iterating from analytics, which contributed to fewer drop-offs on targeted flows.",
      },
      {
        title: "Design engineering",
        text: "The component library lived in the code and defined the tokens and components in the design file. What went into it came from how the application handled data and from user data. Raised its test coverage to 80%.",
      },
      {
        title: "Engineering",
        text: "Moved a high-traffic legacy application to React, TypeScript and Next.js step by step, without disrupting production, and later to the App Router.",
      },
    ],
  },
  {
    years: "2021 — 2022",
    name: "Propps",
    note: "An early-stage startup: the foundation other applications were built on, from the GraphQL schema to the design system.",
    role: "Software Engineer",
    areas: [
      {
        title: "Product",
        text: "Worked with product and design to turn changing requirements into responsive interfaces from the product’s early stages.",
      },
      {
        title: "Design engineering",
        text: "Built and owned the design system: a typed, tested component library published from a monorepo and used by every application.",
      },
      {
        title: "Engineering",
        text: "Built the Next.js application and wrote the schema of its GraphQL API, shaping the frontend architecture from the start.",
      },
    ],
  },
];

const Home: NextPage = () => {
  const defs = useRef<SVGDefsElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const paint = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const grain = useRef<HTMLDivElement>(null);
  const cols = useRef<HTMLElement>(null);

  useEffect(() => {
    let fh = 0;
    let fw = 0;
    let travel = 1;

    const onScroll = () => {
      if (!strip.current) return;
      const p = Math.min(1, Math.max(0, window.scrollY / travel));
      strip.current.style.transform = `translate3d(0, ${p * (S - 1) * fh}px, 0)`;
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

      <main>
        <section className="hero row">
          <small>Profile</small>
          <div className="intro">
            <h1 className="big">I’m Zoha, a product engineer.</h1>
            {/* Order: latest work → what I'm exploring → the person. Company names live in the timeline. */}
            <p>
              Most recently, I delivered <External href="https://www.lineupbridge.com">LineupBridge</External>, a
              booking marketplace for DJs, shaping an open brief into an MVP as the only product, design and
              engineering person.
            </p>
            <p>
              What interests me is how a product stays close to its users as it grows. These days, I’m exploring how we can use LLMs to
              build leaner systems, leaving more bandwidth for reshaping the product and crafting its interface.
            </p>
            <p>
              Thirty-something and finally moving to Berlin. In my spare time, I’m giving some love to my older
              project, an English translation of the{" "}
              <External href="https://yoga-sutra.vercel.app/">Yoga Sutra</External>.
            </p>
            <div className="actions">
              <CopyEmail />
              <External href={LINKEDIN}>Connect via LinkedIn</External>
            </div>
          </div>
        </section>

        <section className="about" ref={cols}>
          <div className="row list">
            <small>Tools</small>
            <ul>
              {/* Order: product, then the link to engineering, the stack, design, quality, agentic tools */}
              <li>Product discovery, user flows, prototyping</li>
              <li>Experiments, feature flags, PostHog</li>
              <li>React, Next.js, TypeScript, GraphQL, server-side rendering</li>
              <li>Design systems, design tokens, Storybook, Tailwind CSS, Figma</li>
              <li>Accessibility, Jest, React Testing Library</li>
              <li>Monorepos, performance</li>
              <li>Claude Code, agentic development</li>
            </ul>
          </div>
          <div className="row list">
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

        <section className="timeline row" id="timeline">
          <h2>Timeline</h2>
          <ul>
            {TIMELINE.map((t) => (
              <li key={t.name}>
                <span>{t.years}</span>
                {/* Native disclosure: keyboard and screen-reader support without script */}
                <details className="more">
                  <summary>
                    <b>{t.name}</b>
                    <span className="more-role">{t.role}</span>
                    <em>{t.note}</em>
                  </summary>
                  <div className="more-body">
                    {t.lineupbridge && <p>{LB_SUMMARY}</p>}
                    <dl>
                      {t.areas.map((a) => (
                        <div key={a.title}>
                          <dt>{a.title}</dt>
                          <dd>{a.text}</dd>
                        </div>
                      ))}
                    </dl>
                    {t.lineupbridge && (
                      <div className="more-links">
                        <Link href="/lineupbridge">
                          <a>Case study</a>
                        </Link>
                        <External href={LB_LINKS.live}>Live app</External>
                        <External href={LB_LINKS.github}>GitHub</External>
                      </div>
                    )}
                  </div>
                </details>
                <span>{t.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <CopyEmail label="Email" />
          <External href={LINKEDIN}>LinkedIn</External>
          <External href="https://github.com/zohaf">GitHub</External>
        </footer>
      </main>
    </>
  );
};

export default Home;
