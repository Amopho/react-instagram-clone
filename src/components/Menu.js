import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Menu = () => {
  return (
    <header>
      <Link class="logo" to="home">
        <li>Instagram</li>
      </Link>
      <div className="area">
        <form>
          <input type="text" placeholder="Search" />
          <button className="search-icon" type="submit">
            <BiSearchAlt />
          </button>
        </form>
      </div>
      <nav>
        <div class="menu">
          <ul class="menu-list">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>Share</li>
            </Link>
            <Link to="/">
              <li>Explore</li>
            </Link>
            <Link to="/">
              <li>Activity</li>
            </Link>
            <Link to="/">
              <li>User avatar</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
