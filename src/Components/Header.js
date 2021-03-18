import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <h4 className="brand-logo "><a className="hide-on-med-and-down">ALGORITHIM SORTER</a></h4>
        <ul className="right">
          <li><Link exact to="/">Home</Link></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Header;
