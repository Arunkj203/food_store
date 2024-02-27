import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";

import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function ItemCard({ row }) {
  const [value, setValue] = useState(0);

  const additem = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newItem = {
      name: row.name,
      quantity: 1,
      price: row.price,
    };
    orders.push(newItem);
    localStorage.setItem("orders", JSON.stringify(orders));
    setValue(1);
  };

  const handleIncrease = () => {
    const newQuantity = value + 1;
    setValue(newQuantity);
    const orders = JSON.parse(localStorage.getItem("orders"));
    const itemIndex = orders.findIndex((item) => item.name === row.name);
    orders[itemIndex] = {
      ...orders[itemIndex],
      quantity: orders[itemIndex].quantity + 1, // Update the quantity
      // Update other properties as needed
    };
    localStorage.setItem("orders", JSON.stringify(orders));
  };

  const handleDecrease = () => {
    if (value !== 1) {
      const newQuantity = value - 1;
      setValue(newQuantity);

      const orders = JSON.parse(localStorage.getItem("orders"));
      const itemIndex = orders.findIndex((item) => item.name === row.name);
      orders[itemIndex] = {
        ...orders[itemIndex],
        quantity: orders[itemIndex].quantity - 1, // Update the quantity
        // Update other properties as needed
      };
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  };

  const handleDelete = () => {
    const orders = JSON.parse(localStorage.getItem("orders"));

    const updatedCart = orders.filter((cartItem) => cartItem.name !== row.name);
    localStorage.setItem("orders", JSON.stringify(updatedCart));
    setValue(0);
  };

  return (
    <div>
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
          <Card.Text>{row.desc}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 className="text-secondry">₹{row.price}</h3>
          {value === 0 ? (
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={additem}
            >
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          ) : (
            <div
              style={{
                display: "flex",
                // justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ButtonGroup className="mb-2">
                <Button variant="primary" onClick={handleDecrease}>
                  -
                </Button>
                <Button variant="info">{value}</Button>
                <Button variant="primary" onClick={handleIncrease}>
                  +
                </Button>

                <Button variant="danger" onClick={handleDelete}>
                  <Trash size={20} />
                </Button>
              </ButtonGroup>
            </div>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ItemCard;
