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

export const LB_AREAS = [
  {
    title: "Product",
    text:
      "Talked with event organisers, DJs and the founder about how bookings are agreed today, and decided with the founder what the first release would do. Wrote the business rules and the negotiation flow, then prototyped the journeys."
  },
  {
    title: "Engineering",
    text:
      "Built on Sharetribe (React, Express) for listings, transactions and payments, and extended its negotiation process with counteroffers. Established the design system and shared components, in sync with Figma. Built with Claude Code, with reviewer agents and hooks checking the work."
  },
  {
    title: "Design",
    text:
      "Owned the brand identity: defined the wordmark and the landing page with the founder."
  }
];
