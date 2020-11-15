import React from "react";

import Capability from "./Capability";

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: "AI Certificate",
      description:
        "Expert certified AI widget for integration in your communications channels.",
      iconClass: "fa-bolt",
    },
    {
      heading: "Optimizing you Company for AI Search Terms",
      description: "We enable you to leverage the AI hype train.",
      iconClass: "fa-line-chart",
    },
    {
      heading: "Bragg About Working with a Modern Tech Company",
      description:
        "The image of your company is dependent on how you are perceived by others. Make yourself standout by appearing on a modern tech companie's partner page.",
      iconClass: "fa-hand-lizard-o",
    },
  ];

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => (
        <Capability key={capability.heading} {...capability} />
      ))}
    </>
  );
};

export default CapabilityList;
