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
      <Card className="photo-container">
        <Card.Img src={`${process.env.PUBLIC_URL}/${img}`} />
        <Card.Body></Card.Body>
      </Card>
    </li>
  );
};

export default Photo;
