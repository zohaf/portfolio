import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LB_LINKS, LB_SUMMARY } from "../lib/lineupbridge";
import External from "../components/External";

// Landing concepts in the order they were explored. Screenshots of the prototype pages, 1440 × 900.
const CONCEPTS = [
  {
    src: "/lineupbridge/concept-orange.jpg",
    title: "Orange light",
    text: "Booking a DJ framed as an experience: warm stage light on the sides of the hero, for space, light and music together.",
  },
  {
    src: "/lineupbridge/concept-dots.jpg",
    title: "Speaker grille",
    text: "Away from atmosphere and back to the music. A speaker-grille dot pattern appears under the cursor; the rest of the page stays plain and professional.",
  },
  {
    src: "/lineupbridge/concept-final.jpg",
    title: "Final",
    text: "The black hero from the speaker-grille concept with the founder's LineupBridge wordmark. Live at lineupbridge.com.",
  },
];

const ConceptSlider = () => {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // the active slide is the one most in view
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }),
      { root: el, threshold: 0.6 }
    );
    Array.from(el.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    const el = track.current;
    const slide = el?.children[i] as HTMLElement | undefined;
    if (!el || !slide) return;
    el.scrollTo({ left: slide.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft) });
  };

  return (
    <div className="cs-slider" role="region" aria-roledescription="carousel" aria-label="Landing page concepts">
      <div
        className="cs-track"
        ref={track}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(Math.min(CONCEPTS.length - 1, active + 1));
          if (e.key === "ArrowLeft") go(Math.max(0, active - 1));
        }}
      >
        {CONCEPTS.map((c, i) => (
          <figure
            key={c.src}
            data-i={i}
            className={`cs-slide${i === active ? " is-active" : ""}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${CONCEPTS.length}`}
          >
            <img src={c.src} alt={`${c.title} landing concept`} width={1440} height={900} loading="lazy" />
            <figcaption>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>
                <b>{c.title}</b>
                <p>{c.text}</p>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="cs-controls">
        <button type="button" aria-label="Previous concept" disabled={active === 0} onClick={() => go(active - 1)}>
          ←
        </button>
        <button
          type="button"
          aria-label="Next concept"
          disabled={active === CONCEPTS.length - 1}
          onClick={() => go(active + 1)}
        >
          →
        </button>
        <span className="cs-count" aria-live="polite">
          {String(active + 1).padStart(2, "0")} / {String(CONCEPTS.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

const LineupBridge: NextPage = () => (
  <>
    <Head>
      <title>LineupBridge · Zoha Fard</title>
      <meta name="description" content="LineupBridge case study: product, engineering and design by Zoha Fard." />
    </Head>

    <nav className="cs-nav">
      <Link href="/">
        <a>← Zoha Fard</a>
      </Link>
      <span>Case study</span>
    </nav>

    <main className="cs">
      <header className="cs-head row">
        <small>2026</small>
        <div>
          <h1>LineupBridge</h1>
          <p className="cs-lead">{LB_SUMMARY}</p>
          <p className="cs-meta">
            Design Engineer. The only engineer, designer and product person, working with the founder.
          </p>
          <div className="cs-links">
            <External href={LB_LINKS.live}>Live app</External>
            <External href={LB_LINKS.github}>GitHub</External>
            <External href={LB_LINKS.figma}>Figma</External>
          </div>
        </div>
      </header>

      <section className="cs-section row">
        <small>Product</small>
        <div>
          <h2>Rules and journeys before screens</h2>
          <p>
            I talked with event organizers, DJs and the founder about how bookings are agreed today. From that I
            wrote the business rules
            and the negotiation flow (offer, counteroffer, final offer, payment, performance), then the journeys
            for booking, profile setup and sign-in, and wireframes and prototypes from those.
          </p>
        </div>
      </section>

      <section className="cs-section row">
        <small>Engineering</small>
        <div>
          <h2>A marketplace base, a custom booking model</h2>
          <ul>
            <li>
              <b>Stack.</b> A fork of the Sharetribe Web Template: React 18, Redux Toolkit, React Final Form,
              Express with server-side rendering. Sharetribe provides listings, transactions, messaging and Stripe
              payments, so the custom work goes into the booking model and the interface.
            </li>
            <li>
              <b>Booking model.</b> Built on Sharetribe&apos;s negotiation process. Counteroffers are stored on
              the transaction and shown as proposed values next to the current terms. Custom pages for making an
              offer and requesting a quote. Page data loads on the server.
            </li>
            <li>
              <b>Design system.</b> <code>--lb-*</code> tokens for type, spacing and sizes; shared modules for
              type, layout, buttons, forms and modals; every component documented in every state and mirrored in
              Figma. Template components are restyled through their class props, so upstream updates still
              merge.
            </li>
            <li>
              <b>Working with Claude Code.</b> Docs in six stages (product, wireframes, journeys, design system,
              pages, Claude) so an agent reads only what a task needs. Skills that write a page spec and add a
              component docs-first; reviewer agents for the design system, the spec and accessibility (WCAG 2.2
              AA); hooks that block edits to the transaction processes, format each edit and flag hard-coded CSS
              values.
            </li>
          </ul>
        </div>
      </section>

      <section className="cs-section">
        <div className="row">
          <small>Design</small>
          <div>
            <h2>Brand identity, decided with the founder</h2>
            <p>
              Three landing concepts, each built as a working prototype, and a wordmark that works within the
              founder&apos;s choice of name format.
            </p>
          </div>
        </div>
        <ConceptSlider />
        <div className="row" style={{ marginTop: 80 }}>
          <small>Wordmark</small>
          <div>
            <div className="cs-logos">
              <figure>
                <div className="plate">
                  <img src="/lineupbridge/logo-caps.png" alt="LINEUPBRIDGE in capitals with a dot mark" />
                </div>
                <figcaption>
                  <b>Proposal</b>
                  All capitals in a geometric sans, with a speaker-grille mark: simple and confident.
                </figcaption>
              </figure>
              <figure>
                <div className="plate">
                  <img src="/lineupbridge/logo-final.png" alt="LineupBridge in semibold mixed case" />
                </div>
                <figcaption>
                  <b>Final</b>
                  The founder kept the mixed-case LineupBridge. Within that, a semibold system-font wordmark: bold,
                  readable at small sizes and the same type as the app.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <Link href="/">
          <a>← Back</a>
        </Link>
        <span />
        <External href={LB_LINKS.github}>GitHub</External>
      </footer>
    </main>
  </>
);

export default LineupBridge;
