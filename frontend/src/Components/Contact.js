import React from "react";
import "./Contact.css";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
  return (
    <div>
      <div className="contact-details">
        <div className="contact-us">Contact Us</div>
        <div className="address">3/32,Vengadesh Nagar, Chennai-600028</div>
        <div className="contact-btns">
          <a href="tel:+919361654921"><CallIcon className="call-btn" /></a>
          <a href="https://wa.me/+919361654921"><WhatsAppIcon className="whatsapp-btn" /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
