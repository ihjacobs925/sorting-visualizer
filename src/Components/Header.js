import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  return (
    <div className="Title">
      <h1>Algorithm Sorter</h1>
      <ul className="Home">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
