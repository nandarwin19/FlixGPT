import React from "react";
import logo from "./../utils/logo.png";

const Header = () => {
  return (
    <div className="absolute inset-0 max-container">
      <img src={logo} alt="" className="w-48 h-18" />
    </div>
  );
};

export default Header;
