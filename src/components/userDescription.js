import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "../data.json";
import { FiArrowDownCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Picker from "emoji-picker-react";

const Home = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [data, setData] = useState(Data);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  console.log(process.env);
  return (
    <Router>
      {/* Avatar photo */}
      <img
        src={`${process.env.PUBLIC_URL}/${data[9].img}`}
        alt="Pink glasses"
      />
      <div className="text">
        <h1>yogawithbriohny</h1>
        <button>Send a message</button>
        <div class="go-down">
          <a href="#scroll" class="arrow-button">
            <span>
              <FiArrowDownCircle />
            </span>
          </a>
        </div>
        <div class="section-button">
          <button>
            <a href="./contact.html"> Let's get to know us</a>
          </button>
        </div>
        <button icon={FiUser}></button>
        <h2>Briohny Smyth, Yoga Teacher</h2>
        <p>Helping you Discover Alignment</p>
        <br />
        <p>
          Practice with me <a>@alomoves</a>
        </p>
        <p>
          Yoga Teacher Training School <a>#AlignedYoga</a>
        </p>
        <div>
          {chosenEmoji ? (
            <span>You chose: {chosenEmoji.emoji}</span>
          ) : (
            <span>No emoji Chosen</span>
          )}
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      </div>
    </Router>
  );
};

export default Home;
