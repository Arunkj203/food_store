import React, { useState, useEffect } from "react";

// import { collection, getDocs } from "firebase/firestore";

// import "./Home.css";
import Navbar from "./Navbar";
import Menu from "./Menu";
// import { db } from "../firebase";

function Home() {
  return (
    <div className="page-container ">
      <div class="container-xxl position-relative px-5">
        <Navbar />
      </div>

      <div className="menu">
        <Menu />
      </div>

      {/* <div className="contact-bar">
        <Contact />
      </div>  */}
    </div>
  );
}

export default Home;
