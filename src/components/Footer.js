import React from "react";
import footerLogoImg from "../assets/images/footer-logo.png";
import facebookIcon from "../assets/images/facebook.png";
import linkedinIcon from "../assets/images/linkedin.png";
import youtubeIcon from "../assets/images/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section */}
        <div className="row">
          {/* Column 1: Company Info */}
          <div className="col-md-3 text-center text-md-start">
            <img
              src={footerLogoImg}
              className="footer-logo"
              alt="BLS Polymers Ltd."
            />
            <p className="footer-company">
              BLS Polymers Ltd
              <br />
              604, Indraprakash Building,
              <br />
              21, Barakhamba Road,
              <br />
              New Delhi - 110001
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-md-2 text-center text-md-start border-right">
            <h5>Company</h5>
            <ul className="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">BLS Group</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="col-md-5 text-center">
            <h5>Connect with us</h5>
            <div className="footer-social pt-5">
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-md-2 text-center border-left">
            <h5>Contact Us</h5>
            <p className="footer-contact pt-5">
              info@blspolymers.com
              <br />
              Tel. (011)-23310658
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row">
          <div className="col text-center">
            <p className="footer-bottom">
              © BLS POLYMERS 2025. All Rights Reserved.{" "}
              <a className="text-white" href="#">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
