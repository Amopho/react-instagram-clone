import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "../data.json";
import { FcApproval } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import { FiUserPlus } from "react-icons/fi";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const UserDescription = () => {
  const [data, setData] = useState(Data);
  console.log(process.env);
  return (
    <Router>
      <div className="avatar">
        <Card>
          <Card.Img
            style={{
              width: "10rem",
              height: "10rem",
              borderRadius: "6rem",
              padding: "1rem",
            }}
            src={`${process.env.PUBLIC_URL}/${data[9].img}`}
            alt="Hand with soaking water"
            roundedCircle
          />
        </Card>
      </div>
      <div className="descr">
        <h2>yogawithbriohny</h2>
        <span id="approved-icon">
          {" "}
          <FcApproval />
        </span>
        <Button>Send a message</Button>
        <Button>
          <FiUserPlus />
        </Button>
        <h2>Briohny Smyth, Yoga Teacher</h2>
        <p>Helping you Discover Alignment</p>
        <p>
          Practice with me <a>@alomoves</a>
        </p>
        <p>
          Yoga Teacher Training School <a>#AlignedYoga ⬇️</a>
        </p>
        <p>
          <a>www.alignedyoga.com/teacher-trainings</a>
        </p>
      </div>
    </Router>
  );
};

export default UserDescription;
