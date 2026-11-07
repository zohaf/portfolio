// LineupBridge story, shared by the timeline row (pages/index.tsx) and the case study
// (pages/lineupbridge.tsx). Wording agreed in ~/Projects/interviews/profile/website.md (2026-11-02).

export const LB_LINKS = {
  live: "https://www.lineupbridge.com",
  github: "https://github.com/zohaf/lineup-bridge",
  figma: "https://www.figma.com/design/uUt1bfNw7imHngWi1QFXGJ"
  // storybook: add once deployed
};

export const LB_SUMMARY =
  "A DJ booking marketplace. An event organiser sends a DJ an offer, both sides can counter, and the DJ accepts; the booking is paid through the platform.";

// Same three areas, in the same order, as every other timeline row (pages/index.tsx).
export const LB_AREAS = [
  {
    title: "Product",
    text:
      "The brief was open, so I started by talking with event organisers, DJs and the founder about how bookings are agreed today. What they told us changed the core flow, and the founder and I agreed what the first release would do."
  },
  {
    title: "Design engineering",
    text:
      "Defined the brand identity with the founder, then the user flows and the interface. Started with a light design system, documented in the code and kept in step with the design file, so it can keep changing as user data and the product evolve."
  },
  {
    title: "Engineering",
    text:
      "Chose an existing marketplace foundation, so the custom work went into the booking model: an offer that both sides can counter before payment. Built with Claude Code from rules and specs kept in the repository, with reviewer agents checking each change."
  }
];
