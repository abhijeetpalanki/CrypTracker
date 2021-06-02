import React from "react";
import logo from '../logo.png';

const Header = () => {
  return (
    <div>
      <img className="logo-image" src={logo} alt="CrypTracker" />
      <h1 className="text-center text-warning mt-3 mb-4">CrypTracker</h1>
    </div>
  );
};

export default Header;
