import Data from "../data.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const Photo = ({ data }) => {
  const { id, img } = data;
  // console.log(process.env);
  return (
    <li key={id}>
      <Card className="photo-container">
        <Card.Img
          style={{
            width: "30rem",
            height: "30rem",
            padding: "1rem",
          }}
          src={`${process.env.PUBLIC_URL}/${data.img}`}
        />
        <Card.Body></Card.Body>
      </Card>
    </li>
  );
};

export default Photo;
