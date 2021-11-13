import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="navlinks" id="1">
        <div className="style1"></div>
        <div className="style2"></div>
        <div className="brand">UIC</div>
        <div className="goto">
          <ul>
            <li>
              <a href="#1">Home</a>
            </li>
            <li>
              <a href="#2">About UIC</a>
            </li>
            <li>
              <a href="#2">Courses</a>
            </li>
          </ul>
        </div>
        <div className="login">
          <button>
            <a href="https://uicminorproject.vercel.app/">Login/Signup</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
