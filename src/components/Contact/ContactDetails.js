import React from "react";

const ContactDetails = () => {
  return (
    <div className="col-lg-6">
      <h4 className="contact-details">CORPORATE HEADQUARTERS</h4>
      <p>
        604, Indraprakash Building, <br /> 21, Barakhamba Road, <br /> New Delhi
        - 110001
      </p>
      <p>
        <strong>Phone:</strong> +91 11 400 786 01, +91 11 23755263
      </p>
      <p>
        <strong>Email:</strong> blspoly@blsgroup.in | backoffice@blspolymers.com
      </p>
      <p className="pt-3 pb-3">
        <strong>Please contact us if you need some information.</strong>
      </p>
      <p>
        For financial analyst & investor inquiries, email:{" "}
        <a href="mailto:info@blspolymers.com">info@blspolymers.com</a>
      </p>
      <p>
        For employment information, visit the Careers page or email:{" "}
        <a href="mailto:info@blspolymers.com">info@blspolymers.com</a>
      </p>
    </div>
  );
};

export default ContactDetails;
