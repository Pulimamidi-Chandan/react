import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Pentakota Jaswanth Assessment</div>
      <nav className="nav">
        <ul>
          <li>Plans & Pricing</li>
          <li>Product Tour</li>
          <li>Blog</li>
          <li>Security</li>
          <li>Help</li>
          <li>Sign In</li>
        </ul>
        {/* <button className="get-started">Get Started</button> */}
      </nav>
    </header>
  );
};

export default Header;