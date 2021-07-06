import Data from "../data.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const Photo = () => {
  const [data, setData] = useState(Data);
  console.log(process.env);
  return (
    <Router>
      <img
        src={`${process.env.PUBLIC_URL}/${data[2].img}`}
        alt="Pink glasses"
      />
    </Router>
  );
};

export default Photo;
