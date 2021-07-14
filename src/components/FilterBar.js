import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { CgHome } from "react-icons/cg";
import { FiSend } from "react-icons/fi";
import { MdExplore } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const FilterBar = () => {
  return (
    <div class="menu">
      <ul class="menu-list">
        <Link>
          <li>
            <span>
              <CgHome /> POSTS
            </span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <span>
              {" "}
              <FiSend />
              REELS
            </span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <spam>
              {" "}
              <MdExplore /> IGTV
            </spam>
          </li>
        </Link>
        <Link to="/">
          <li>
            <spam>
              <FiHeart /> TAGGED{" "}
            </spam>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default FilterBar;
