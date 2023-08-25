import type { NextPage } from "next";
import { WorkDetails } from "../../components/WorkDetails";

const imagePaths = ["oppCards"];

const descriptionTitle =
  "As part of Engineering team at Basking, my day to day looked like:";

const descriptionItems = [
  "upgrade Frontend Infrastructure by adding Vite, TypeScript and Tailwind",
  "Initiate a reusable component library and establish a design system",
  "improve the UI by identifying bugs and common patterns, and implementing solutions",
  "lead the redesign of features, refined user flows, and established visual uniformity through updated design tokens",
];

const basking: NextPage = () => (
  <WorkDetails
    companyName="Basking"
    header={{ title: "Frontend Engineer", detail: "Basking" }}
    images={imagePaths}
    description={{ title: descriptionTitle, items: descriptionItems }}
    imageSizes={{ width: 566, height: 328 }}
  />
);

export default basking;
