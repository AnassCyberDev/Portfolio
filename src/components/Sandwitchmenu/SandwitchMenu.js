// src/components/SandwichMenu.js
import React, { useState } from 'react';
import '../Styling/css/sandwitch.css';
import { Link } from 'react-router-dom';

const SandwichMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="sandwich-icon" onClick={toggleMenu}>
        &#9776; {/* This is the Unicode character for the hamburger icon */}
      </div>
      {isOpen && (
        <div className="menu">
          <Link to={"/"}>Home</Link>
          <Link to={"/go/Portfolio"}>Portfolio</Link>
          
          <Link to={"/go/About"}>about</Link>
          <Link to={"/go/Blog"}>Blogs</Link>
          <Link to={"contact"}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default SandwichMenu;
