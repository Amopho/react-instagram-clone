import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { BiGrid } from "react-icons/bi";
import { BiMovie } from "react-icons/bi";

import { RiMovieLine } from "react-icons/ri";
import { HiOutlineTag } from "react-icons/hi";

const FilterBar = () => {
  return (
    <div class="menu">
      <ul class="menu-list">
        <Link>
          <li>
            <span>
              <BiGrid /> POSTS
            </span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <span>
              {" "}
              <BiMovie />
              REELS
            </span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <spam>
              {" "}
              <RiMovieLine /> IGTV
            </spam>
          </li>
        </Link>
        <Link to="/">
          <li>
            <spam>
              <HiOutlineTag /> TAGGED{" "}
            </spam>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default FilterBar;
