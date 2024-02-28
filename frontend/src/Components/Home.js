import React, { useState, useEffect } from "react";

// import { collection, getDocs } from "firebase/firestore";

// import "./Home.css";
import Hero from "./Hero";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Contact from "./Contact";

import "./Home.css";
// import { db } from "../firebase";

function Home() {
  return (
    <div className="page-container ">
      <div className="contact-bar">
        <Navbar />
      </div>

      <div class="container-xxl position-relative">
        <Hero />
      </div>

      <div className="menu">
        <Menu />
      </div>
      <div className="footer">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
