import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import styles from "./Menu.css";
import table from "../img/table_rot.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faBars,
  faCoffee,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";

import Papa from "papaparse";
import axios from "axios";

function Menu() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(1);
  const [data, setdata] = useState([]);

  const handleTabChange = (event, newValue) => {
    if (newValue !== 0) {
      fetchData("main_menu.csv");
    }
    setSelectedTab(newValue);
  };

  useEffect(() => {
    fetchData("main_menu.csv");
  }, []);

  const fetchData = async (file_path) => {
    try {
      const response = await axios.get(file_path);
      const csvData = response.data;

      Papa.parse(csvData, {
        header: true,
        complete: (results) => {
          setdata(results.data);
        },
      });
    } catch (error) {
      console.error("Error fetching or parsing csv file:", error);
    }
  };

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="icon position tabs example"
              centered
              TabIndicatorProps={{
                style: {
                  backgroundColor: "orange",
                },
              }}
            >
              <Tab
                icon={
                  <FontAwesomeIcon
                    icon={faCoffee}
                    classNameName="fa-2x text-primary"
                  />
                }
                style={{ color: "orange", fontSize: "18px" }}
                iconPosition="start"
                label={
                  <div className="ps-3">
                    <small className="text-body"> Popular</small>
                    <h6
                      className="mt-n1 mb-0"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Breakfast
                    </h6>
                  </div>
                }
              />

              <Tab
                icon={
                  <FontAwesomeIcon
                    icon={faHamburger}
                    classNameName="fa-2x text-primary"
                  />
                }
                style={{ color: "orange", fontSize: "18px" }}
                iconPosition="start"
                label={
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6
                      className="mt-n1 mb-0"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Lunch
                    </h6>
                  </div>
                }
              />
              <Tab
                icon={
                  <FontAwesomeIcon
                    icon={faUtensils}
                    classNameName="fa-2x text-primary"
                  />
                }
                style={{ color: "orange", fontSize: "18px" }}
                iconPosition="start"
                label={
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6
                      className="mt-n1 mb-0"
                      style={{ color: "black", fontWeight: "bold" }}
                    >
                      Dinner
                    </h6>
                  </div>
                }
              />
            </Tabs>
            <div class="tab-content">
              <Typography
                component="div"
                role="tabpanel"
                hidden={selectedTab !== 0}
                id={`tabpanel-0`}
                aria-labelledby={`tab-0`}
                style={{ marginLeft: "50px", marginTop: "40px" }}
              >
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <article className={styles.article}>
                    <img
                      className={styles.image}
                      src={table}
                      alt="background"
                    />
                    <h1 className={styles.header}>React Is Awesome</h1>
                  </article>
                </div>
              </Typography>
              <Typography
                component="div"
                role="tabpanel"
                hidden={selectedTab !== 1}
                id={`tabpanel-1`}
                aria-labelledby={`tab-1`}
                style={{ marginLeft: "50px", marginTop: "40px" }}
              >
                <div id="tab-2" className="tab-pane fade show p-0 active">
                  <div className="row g-10">
                    {data.map((row, index) => (
                      <div
                        className="col-lg-6"
                        onClick={() => {
                          navigate("/items?data=" + row.name);
                        }}
                      >
                        <div className="d-flex align-items-center py-2">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            key={index}
                            src={"../food/" + row.image}
                            alt={`Image ${index}`}
                            style={{ width: "100px", height: "100px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{row.name}</span>
                            </h5>
                            <small className="fst-italic">Tab 1</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Typography>
              <Typography
                component="div"
                role="tabpanel"
                hidden={selectedTab !== 2}
                id={`tabpanel-2`}
                aria-labelledby={`tab-2`}
                style={{ marginLeft: "50px", marginTop: "40px" }}
              >
                <div id="tab-3" className="tab-pane fade show p-0 active">
                  <div className="row g-10">
                    {data.map((row, index) => (
                      <div
                        className="col-lg-6"
                        onClick={() => {
                          navigate("/items?data=" + row.name);
                        }}
                      >
                        <div className="d-flex align-items-center py-2">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            key={index}
                            src={"../food/" + row.image}
                            alt={`Image ${index}`}
                            style={{ width: "100px", height: "100px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{row.name}</span>
                            </h5>
                            <small className="fst-italic">Tab 1</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

{
  /* <div
className="tab-className text-center wow fadeInUp"
data-wow-delay="0.1s"
>
<ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
  <li className="nav-item">
    <Button
      className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
      data-bs-toggle="pill"
      onClick={() => {
        setBreakfast(true);
        setLunch(false);
        setDinner(false);
      }}
    >
      <FontAwesomeIcon
        icon={faCoffee}
        classNameName="fa-2x text-primary"
      />
      <div className="ps-3">
        <small className="text-body">Popular</small>
        <h6 className="mt-n1 mb-0">Breakfast</h6>
      </div>
    </Button>
  </li>
  <li className="nav-item">
    <Button
      className="d-flex align-items-center text-start mx-3 pb-3"
      data-bs-toggle="pill"
      onClick={() => {
        setBreakfast(false);
        setLunch(true);
        setDinner(false);
      }}
    >
      <FontAwesomeIcon
        icon={faHamburger}
        classNameName="fa-2x text-primary"
      />
      <div className="ps-3">
        <small className="text-body">Special</small>
        <h6 className="mt-n1 mb-0">Lunch</h6>
      </div>
    </Button>
  </li>
  <li className="nav-item">
    <Button
      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
      data-bs-toggle="pill"
      onClick={() => {
        setBreakfast(false);
        setLunch(false);
        setDinner(true);
      }}
    >
      <FontAwesomeIcon
        icon={faUtensils}
        classNameName="fa-2x text-primary"
      />
      <div className="ps-3">
        <small className="text-body">Lovely</small>
        <h6 className="mt-n1 mb-0">Dinner</h6>
      </div>
    </Button>
  </li>
</ul> 
</div>*/
  // const importAll = (r) => r.keys().map(r);
  // const images = importAll(
  //   require.context("../img/item/", false, /\.(png|jpe?g|svg)$/)
  // );
}
