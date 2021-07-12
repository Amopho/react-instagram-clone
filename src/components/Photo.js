import Data from "../data.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const Photo = ({ info }) => {
  const { id, img } = info;
  // const [data, setData] = useState(Data);
  // console.log(process.env);
  return (
    <li key={id}>
      <h2>Hi</h2>
      <Card style={{ width: "15rem", height: "15rem" }}>
        <Card.Img
          src={`${process.env.PUBLIC_URL}/${img}`}
          alt="Hand with soaking water"
        />
        <Card.Body></Card.Body>
      </Card>
    </li>
  );
};

export default Photo;
