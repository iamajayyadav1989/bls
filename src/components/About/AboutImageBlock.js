import React from "react";
import blsAboutUsImg from "../../assets/images/bls_about_us_body.jpg";

const AboutImageBlock = () => {
  return (
    <section className="about-section">
      <img src={blsAboutUsImg} alt="About" className="about-full-image" />
      <div className="container">
        <div className="about-content pt-5 pb-4">
          <p className="about-text">
            BLS Polymers, one of the units of BLS Group, was formed exclusively
            to produce Cable Compounds. Production started in 2002,
            manufacturing a range of compounds for Power and Telecom cable
            sectors. BLS Polymers has in-plant manufacturing, testing, and
            formulation development facilities. The head office is in Delhi,
            with manufacturing facilities in Goa, having a production capacity
            of 30,000MT.{" "}
          </p>

          <p className="about-text">
            BLS Polymers manufactures high-density polyethylene (HDPE),
            low-density polyethylene (LDPE), linear low-density polyethylene
            (LLDPE), and medium-density polyethylene (MDPE) compounds. These are
            used as insulation and sheathing compounds in telecom (communication
            and optic fiber cables) and power industries (Extra High Voltage
            Power Cables, High Voltage Power Cables, and Aerial Bunched Power
            Cables). Similarly, PVC compounds are used in power, data,
            signaling, and automotive cables, as well as house wiring. XLPE
            compounds are widely used in power aerial bunched cables.
          </p>

          <p className="about-text">
            BLS Polymers also offers a complete package of Specialty Additive
            masterbatches, which are applicable in various sectors. It also
            provides a complete range of black and white masterbatches for both
            cable and non-cable applications in various polymers.
          </p>

          <p className="about-text">
            Our extensive range of cable compounds, used in power, control,
            data, instrumentation, and Telecom Cables, allows us to provide
            optimal solutions to wire and cable manufacturers. This, combined
            with our product quality and customer-centric approach, has made us
            a leading supplier to major wire and cable manufacturers in India.
          </p>

          <p className="about-text">
            BLS Polymers follows global best practices to ensure it delivers
            maximum value to customers, employees, and suppliers. We have
            implemented SAP solutions for data-driven processes and a
            customer-centric approach to maximize client satisfaction. Our
            workflow starts not just from order placement but anticipates
            customer needs, ensuring coordination and success.
          </p>

          <p className="about-text">
            Our state-of-the-art manufacturing facility in Goa gives us a
            strategic advantage due to its port location. It also offers a
            pricing advantage and allows continuous R&D for new formulations to
            meet specific client needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutImageBlock;
