import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";



function Navbar() {
  return (
    <div>
      <div className="navbar d-flex flex-row align-items-center justify-content-between text-justify ">
        <h1 className="website-name">
          {/* <FontAwesomeIcon icon={faUtensils} className="me-3 " /> */}
          {/* ARM FOODS */}
          SRI VINAYAGA FOODS
        </h1>

      </div>
    </div>
  );
}

export default Navbar;
