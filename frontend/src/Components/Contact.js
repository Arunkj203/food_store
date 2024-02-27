import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
  return (
    <div>
      <div className="contact-details d-flex flex-row align-items-center justify-content-between text-justify ">
        <h1 className="website-name">
          {/* <FontAwesomeIcon icon={faUtensils} className="me-3 " /> */}
          {/* ARM FOODS */}
          SRI VINAYAGA FOODS
        </h1>
        <div
          className="d-flex flex-column  align-items-center mb-10 justify-content-end text-justify"
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
      </div>
    </div>
  );
}

export default Contact;
