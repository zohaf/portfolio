// LineupBridge story, shared by the timeline row (pages/index.tsx) and the case study
// (pages/lineupbridge.tsx). Same wording as the README in github.com/zohaf/lineup-bridge.

export const LB_LINKS = {
  live: "https://www.lineupbridge.com",
  github: "https://github.com/zohaf/lineup-bridge",
  figma: "https://www.figma.com/design/uUt1bfNw7imHngWi1QFXGJ"
  // storybook: add once deployed
};

export const LB_SUMMARY =
  "A DJ booking marketplace. An event organizer sends a DJ a structured offer; both sides can counter for up to three rounds; the DJ accepts and the booking is paid through the platform. Live as an MVP.";

export const LB_AREAS = [
  {
    title: "Product",
    text:
      "Talked with event organizers, DJs and the founder about how bookings are agreed today. Wrote the business rules, the negotiation flow and the journeys for booking, profile setup and sign-in, then wireframes and prototypes."
  },
  {
    title: "Engineering",
    text:
      "Sharetribe Web Template (React 18, Redux Toolkit, Express SSR) for listings, transactions and payments. Extended its negotiation process with stored counteroffers and custom offer and quote pages. Design system of tokens and shared components, mirrored in Figma. Claude Code set up with spec and component skills, three reviewer agents and hooks."
  },
  {
    title: "Design",
    text:
      "Brand identity with the founder: three landing concepts and a wordmark, from an all-caps proposal to a semibold system-font LineupBridge that keeps the founder's mixed-case name."
  }
];
