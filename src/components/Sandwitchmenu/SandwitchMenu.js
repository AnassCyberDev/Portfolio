// src/components/SandwichMenu.js
import React, { useState } from 'react'
import '../Styling/css/sandwitch.css';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { SiBlogger } from "react-icons/si";
import { IconContext } from 'react-icons';
import { IoCloseOutline,IoMenu } from "react-icons/io5";

const SandwichMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleSize = () => {
    setIsEnlarged(!isEnlarged);
  };

  // const style1={
  //   position: "fixed",
  // top: "20px",
  // left: "20px",
  // zIndex: 1000,
  // height: "400px",
  // border: "1px solid rgb(255, 36, 0)",
  // borderRadius: "24px",
  // }

  // const style2={
  //   position: "fixed",
  // top: "20px",
  // left: "20px",
  // zIndex: "1000",
  // bordeRradius: "50%",
  // border: "solid 1px rgb(255, 36, 0)",
  // }

  return (
    <div className={`menu-container ${isEnlarged ? 'enlarged' : ''}`}>
      {isEnlarged ? <><div className="sandwich-icon" onClick={toggleSize} >
      <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                <IoCloseOutline />
                </div>
              </IconContext.Provider>
      </div>
        <div className="menu" >

          <Link to={"/"} >
            <div className='flexRowStart'>
              <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                  <FaHome />
                </div>
              </IconContext.Provider>
              <div>
                Home
              </div>
            </div>
            </Link>

          <Link to={"/go/Portfolio"}>
          <div className='flexRowStart'>
              <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                <FaBriefcase />
                </div>
              </IconContext.Provider>
              <div>
              Portfolio
              </div>
            </div>
            </Link>

          <Link to={"/go/About"}>
          <div className='flexRowStart'>
              <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                <FaUser />
                </div>
              </IconContext.Provider>
              <div>
              about
              </div>
            </div>
          </Link>
          <Link to={"/go/Blog"}>
          <div className='flexRowStart'>
              <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                <SiBlogger />
                </div>
              </IconContext.Provider>
              <div>
              Blogs
              </div>
            </div>
          </Link>
          <Link to={"contact"}>
          <div className='flexRowStart'>
              <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                <HiChatBubbleLeftRight />
                </div>
              </IconContext.Provider>
              <div>
              Contact
              </div>
            </div>
          </Link>
        </div></> :
        <div className="sandwich-icon" onClick={toggleSize} >
         <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                <IoMenu />
                </div>
              </IconContext.Provider> {/* This is the Unicode character for the hamburger icon */}
        </div>
      }

    </div>
  );
};

export default SandwichMenu;
