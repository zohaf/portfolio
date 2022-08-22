import type { NextPage } from "next";
import { WorkDetails } from "../../components/WorkDetails";

const imagePaths = ["cardOffer", "offerDetails", "login", "signUp"];

const descriptionTitle =
  "As part of the Frontend team at EatFirst, my day to day looked like:";

const descriptionItems = [
  "adding new features to a greenfield project, working autonomsly as well as pair programming from different time zones",
  "expanding our component library, improving our design system, and maintaing an updated storybook",
  "experiment and implement MVPs with product team to help grow our acquisition channels",
  "Learning how to write simple tests",
];

const eatfirst: NextPage = () => (
  <WorkDetails
    companyName="eatfirst"
    header={{ title: "Junior Front-end Developer", detail: "EatFirst" }}
    images={imagePaths}
    description={{ title: descriptionTitle, items: descriptionItems }}
  />
);

export default eatfirst;
