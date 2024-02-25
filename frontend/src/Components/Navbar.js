import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faBars } from "@fortawesome/free-solid-svg-icons";

import bg from "../img/hero.png";

// import RestaurantIcon from '@mui/icons-material/Restaurant';

function Navbar() {
  return (
    <div>
      <div className="container-xxl   bg-dark hero-header ">
        <div className="text-container my-2 py-5 px-3 ">
          <a href="/" className="navbar-brand p-0 ">
            <h1 className="m-0 website-name">
              <FontAwesomeIcon icon={faUtensils} className="me-3 " />
              {/* ARM FOODS */}
              SRI VINAYAGA FOODS
            </h1>
            {/* Uncomment the line below if you have a logo image */}
            {/* <img src="img/logo.png" alt="Logo" /> */}
          </a>
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start font-weight-bolder">
              <h1 className="hero-text text-white animated slideInLeft">
                GET HOME FOOD
                <br />
                Delicious Meal
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Food that reminds you of motherhood
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden py-2 w-20 h-10">
              {/* Update the image source to the correct path */}
              <img className="img-fluid" src={bg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container-xxl bg-white p-0">
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
           <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
               <span class="sr-only">Loading...</span>
           </div>
       </div>
       <div class="container-xxl position-relative p-0">
         <div className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
           <h1 className="text-primary m-0">
             <FontAwesomeIcon icon={faUtensils} className="me-3" />
             AMMA'S KITCHEN
           </h1>
         </div>
       </div>
     </div> */}
    </div>
  );
}

export default Navbar;
