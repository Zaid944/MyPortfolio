import { useEffect, useState } from "react";
import React from "react";
import "./Navbar.css";

function Navbar() {
  let backgroundColorValue = "";
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (scrollPosition > 0) {
    backgroundColorValue = "#606060b3";
  }
  return (
    <>
      <div className="MainNav">
        <div
          className="MainNav"
          style={{ backgroundColor: backgroundColorValue }}
        >
          <div className="Common different">
            <a href="#home">Zaid</a>
          </div>
          <div className="Common different">
            <a href="#About">About</a>
          </div>
          <div className="Common different">
            <a href="#Projects">Projects</a>
          </div>
          <div className="Common different">
            <a href="#Code">Coding Profiles</a>
          </div>
          <div className="Common different">
            <a href="#Contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
