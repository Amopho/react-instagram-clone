import React from "react";
import { Link } from "react-router-dom";
import Photo from "./Photo";
import { BiSearchAlt } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { FiSend } from "react-icons/fi";
import { MdExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const Menu = () => {
  return (
    <header>
      {/* <Switch>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          exact
          component={UserDescription}
        />
      </Switch> */}
      <nav className="navbar">
        <Link className="logo" to="home">
          <span>Instagram</span>
        </Link>
        <div className="area">
          <form>
            <input type="text" placeholder="Search" />
            <button className="search-icon" type="submit">
              <BiSearchAlt />
            </button>
          </form>
        </div>

        <div class="navbar__links">
          <ul>
            <Link>
              <li>
                <CgHome />
              </li>
            </Link>
            <Link to="/">
              <li>
                <FiSend />
              </li>
            </Link>
            <Link to="/">
              <li>
                <MdExplore />
              </li>
            </Link>
            <Link to="/">
              <li>
                <FiHeart />
              </li>
            </Link>
            <Link to="/">
              <li>
                <FiUser />
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
