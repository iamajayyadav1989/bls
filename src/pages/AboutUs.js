import React from "react";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import VisionMission from "../components/About/VisionMission";
import AboutImageBlock from "../components/About/AboutImageBlock";
import HeritageSection from "../components/About/HeritageSection";
import ValuesSection from "../components/About/ValuesSection";
import LeadershipSection from "../components/About/LeadershipSection";

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <AboutImageBlock />
      <HeritageSection />
      <ValuesSection />
      <LeadershipSection />
    </>
  );
};

export default AboutUs;
