import React from "react";
import CertificationsHero from "../components/Certifications/CertificationsHero";
import CertificationIntro from "../components/Certifications/CertificationIntro";
import CertificationIcons from "../components/Certifications/CertificationIcons";
import CertificatesGrid from "../components/Certifications/CertificatesGrid";

const Certifications = () => {
  return (
    <>
      <CertificationsHero />
      <section className="certification-section pb-5">
        <div className="container">
          <CertificationIntro />
          <CertificationIcons />
          <CertificatesGrid />
        </div>
      </section>
    </>
  );
};

export default Certifications;
