import React from "react";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


function Contact() {
  return (
 
      <div
        className="conatct-details d-flex flex-column  align-items-center mb-10 justify-content-end text-justify"
        style={{ marginRight: "40px" }}
      >
        <div className="contact-us mb-10">Contact Us</div>
        {/* <div className="address">3/32,Vengadesh Nagar, Chennai-600028</div> */}
        <div className="contact-btns d-flex flex-row align-items-center justify-content-end text-justify">
          <a href="tel:+919677002548">
            <CallIcon className="call-btn" />
          </a>
          <a href="https://wa.me/+919677002548">
            <WhatsAppIcon className="whatsapp-btn" />
          </a>
        </div>
      </div>
   
  );
}

export default Contact;
