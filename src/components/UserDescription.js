import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "../data.json";
import { FiArrowDownCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import { FiUserPlus } from "react-icons/fi";
import Image from "react-bootstrap/Image";

const UserDescription = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [data, setData] = useState(Data);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  console.log(process.env);
  return (
    <Router>
      {/* Avatar photo */}
      <Image
        src={`${process.env.PUBLIC_URL}/${data[9].img}`}
        roundedCircle
        alt="avatar"
      />
      <div className="text">
        <h1>yogawithbriohny</h1>
        <button>Send a message</button>
        <div class="section-button">
          <Button>
            <FiUserPlus />
          </Button>
        </div>
        <button icon={FiUser}></button>
        <h2>Briohny Smyth, Yoga Teacher</h2>
        <p>Helping you Discover Alignment</p>
        <br />
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
