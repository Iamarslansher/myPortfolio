import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.css";

import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const menuRef = useRef();
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
    if (open) {
      menuRef.current.style.right = "0";
    } else {
      menuRef.current.style.right = "-300px";
    }
  };

  return (
    <div className="nav-container">
      <h2 className="name">Arsalan</h2>
      <AiOutlineMenu className="menuBtn" onClick={openMenu} />
      <div ref={menuRef} className="list-div">
        <ul className="nav-list">
          <li className="list-item">
            <AnchorLink className="anchr-link" href="#home">
              Home
            </AnchorLink>
          </li>
          <li className="list-item">
            <AnchorLink className="anchr-link" href="#aboutUs">
              About Us
            </AnchorLink>
          </li>
          <li className="list-item">
            <AnchorLink className="anchr-link" href="#skills">
              Skills
            </AnchorLink>
          </li>
          <li className="list-item">
            <AnchorLink className="anchr-link" href="#projects">
              Projects
            </AnchorLink>
          </li>
          <li className="list-item">
            <AnchorLink className="anchr-link" href="#contactUs">
              Contact Us
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
