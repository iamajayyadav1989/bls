import React from "react";
import visionIcon from "../../assets/images/vision-icon.png";
import missionIcon from "../../assets/images/mission-icon.png";

const VisionMission = () => {
  return (
    <div className="container">
      <div className="row vision-mission mb-5 pt-5">
        <div className="col-md-6">
          <div className="d-flex">
            <img src={visionIcon} alt="Vision Icon" className="icon" />
            <div className="vision-text">
              <h3>Vision</h3>
              <p>
                BLS Polymers started as a vision of Sri Vinod Aggarwal to boost
                domestic competencies in the polymer compounds sector.
                Established in 1991, BLS Polymers has grown into one of the
                largest polymer compounders in India, as validated by its strong
                ties with most major wire and cable manufacturers in the
                country.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex">
            <img src={missionIcon} alt="Mission Icon" className="icon" />
            <div className="mission-text">
              <h3>Mission</h3>
              <p>
                We believe that trust and commitment (to both customers and
                channel partners) is the key to growth. To ensure the highest
                standards in both products and service, our team of experts
                makes the strongest possible efforts in the areas of technology,
                quality, customer service, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
