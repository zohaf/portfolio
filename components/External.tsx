import type { ReactNode } from "react";

// Every link that leaves the site goes through this: it opens in a new tab.
const External = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default External;
