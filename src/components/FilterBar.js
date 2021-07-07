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
    <header>
      <nav>
        <div class="menu">
          <ul class="menu-list">
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

export default FilterBar;
