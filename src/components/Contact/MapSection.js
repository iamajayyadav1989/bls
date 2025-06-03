import React from "react";

const MapSection = () => {
  return (
    <div className="col-lg-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.839564608!2d77.06889734740162!3d28.5272803435954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f0f3170c9f%3A0x9486e8d498ce3c79!2sIndra%20Prakash%20Building!5e0!3m2!1sen!2sin!4v1649353206359!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="BLS Headquarters"
      ></iframe>
    </div>
  );
};

export default MapSection;
