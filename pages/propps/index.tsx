import type { NextPage } from "next";
import { WorkDetails } from "../../components/WorkDetails";

const imagePaths = [
  "listings",
  "offers",
  "inviteBuyer",
  "actionOffer",
  "agentcards",
];

const descriptionTitle =
  "As part of the tech team at Propps, my day to day looked like:";

const descriptionItems = [
  "working with the product and design team to define and implement new features",
  "expanding and maintaining our unified component library, design system, and various open source libraries",
  "working with the sales team to build and integrate tools that help grow our acquisition channels",
  "Learning TDD and writing tests",
];

const propps: NextPage = () => (
  <WorkDetails
    companyName="propps"
    header={{ title: "Junior Front-end Developer", detail: "Propps" }}
    images={imagePaths}
    description={{ title: descriptionTitle, items: descriptionItems }}
  />
);

export default propps;
