import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Items.css";
import ItemCard from "./ItemCard";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// import * as XLSX from "xlsx";
import Papa from "papaparse";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Items({ time, item }) {

  
  const file_path = time + ".csv";

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(file_path);
        const csvData = response.data;

        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            const filteredRows = results.data.filter(
              (row) => row.item === item
            );

            setFilteredData(filteredRows);
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing csv file:", error);
      }
    };

    fetchData();
  }, []);

  const display = () => {
    const orders = JSON.parse(localStorage.getItem("orders"));
    var message = "";
    var total = 0;

    orders.forEach((key) => {
      total = total + key.quantity * key.price;
      message =
        message +
        `Item: ${key.name} , Quantity: ${key.quantity} , Price : ₹${key.price}` +
        "\n";
    });

    message = message + `Total:${total}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+919677002548?text=${encodedMessage}`, "_blank");
  };

  return (
    <div>
      {/* <Button variant="primary" onClick={display}>
        Order
      </Button> */}

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="3"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {filteredData?.map((row, index) => (
          <SwiperSlide>
            <ItemCard key={index} row={row} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Items;

// // Assuming your Excel file is located at public/data.xlsx
// const response = await fetch("../img/ARUNKUMAR.J_IV_CSE_E.xlsx");

// const arrayBuffer = await response.arrayBuffer();

// // Parsing Excel data
// const workbook = XLSX.read(arrayBuffer, { type: "array" });
// console.log(workbook);
// const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
// console.log(sheetName);
// const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

// console.log(excelData);

// <Col key={index}>
//
// </Col>

// const { search } = useLocation();
// const params = new URLSearchParams(search);
// const time = params.get("time");
// const item = params.get("item");
//  <ItemCard key={index} row={row} />
// const navigate = useNavigate();

