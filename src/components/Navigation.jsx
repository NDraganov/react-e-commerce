import React, { useState } from "react";
import "./Navigation.css";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

function Navbar(props) {
  const links = ['Collections', 'Men', 'women', 'About', 'Contact'];
  const [isMouseOver, setMouseOver] = useState(false);

  function hover() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="navbar">
      <h1>sneakers</h1>
      <nav>
        <ul className="links">
            <li> 
              <a className={isMouseOver ? 'bottom-highlight' : ''} id="link" onMouseOver={hover} onMouseOut={mouseOut}>Collections</a>
            </li>
            <li>
            <a className={isMouseOver ? 'bottom-highlight' : ''} id="link" onMouseOver={hover} onMouseOut={mouseOut}>Men</a>
            </li>
            <li>
            <a className={isMouseOver ? 'bottom-highlight' : ''} id="link" onMouseOver={hover} onMouseOut={mouseOut}>Women</a> 
            </li>
            <li>
            <a className={isMouseOver ? 'bottom-highlight' : ''} id="link" onMouseOver={hover} onMouseOut={mouseOut}>About</a>
            </li>
            <li>
            <a className={isMouseOver ? 'bottom-highlight' : ''} id="link" onMouseOver={hover} onMouseOut={mouseOut}>Contact</a>
            </li>
        </ul>
        <div className="left-nav">
           <img className="cart" src={cart} />
            <img className="avatar" src={avatar} /> 
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
