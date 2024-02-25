import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// import * as XLSX from "xlsx";
import Papa from "papaparse";
import axios from "axios";

function Items() {
  const navigate = useNavigate();

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const data = params.get("data");

  const [filteredData, setFilteredData] = useState([]);
  const file_path = "menu.csv";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(file_path);
        const csvData = response.data;

        Papa.parse(csvData, {
          header: true,
          complete: (results) => {
            const filteredRows = results.data.filter(
              (row) => row.item === data
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

  return (
    <div>
      <Row xs={1} md={3} className="g-4 py-5 mx-5">
        {filteredData.map((row, index) => (
          <Col key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={"../food/" + row.image}
                alt="none"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "350px",
                  objectFit: "contain",
                  padding: "15px",
                  justifyContent: "center",
                }}
              />
              <Card.Body>
                <Card.Title>{row.name}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 className="text-secondry">₹{row.price}</h3>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => {
                    navigate("/pdf");
                  }}
                >
                  <AddCircleOutlineIcon fontSize="large" />
                </IconButton>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
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
