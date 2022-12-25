import React, { useState, useEffect } from "react";
import "./Navigation.css";

function Navbar() {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  const handleCart = () => {
    setCart(!cart);
  };

  useEffect(() => {
    const get = JSON.parse(localStorage.getItem("data")) || null;
    setData(get);
  }, [data]);


  const remove = () => {
    localStorage.removeItem('data');
    window.location.reload();
  };
  function handleOpenSideMenu() {
    setSideNav(true)
  }
  return (
    <div className="navbar">
      <img className="menu-icon" src="assets/images/icon-menu.svg" alt="" onClick={handleOpenSideMenu} />
      <h1>sneakers</h1>
      <nav>
        <ul className="links">
          <li><a className="link">Collections</a></li>
          <li><a className="link">Men</a></li>
          <li><a className="link">Women</a> </li>
          <li><a className="link">About</a></li>
          <li><a className="link">Contact</a></li>
        </ul>
        <div className="left-nav">
          <div className="basket">
            <img className="cart" src="assets/images/icon-cart.svg" onClick={handleCart}/>
            <p className={data > 0 && `count-basket`}>{data}</p>
          </div>
          <img className="avatar" src="assets/images/image-avatar.png" onClick={handleCart} />
        </div>

        {/* {Side Nav} */}
         
         <div className={`side-nav ${sideNav === false && `hidden`}`}>
            <img src="assets/images/icon-close.svg" alt="" onClick={() => setSideNav(false)} />
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
         </div>

         <div className={`container modul ${cart === false && `hidden`}`}>
      <h2>Cart</h2>
      <hr />
      {data === null ? (
        <div className="empty-cart">
          <p className="empty">Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-info">
          <div className="content">
            <img
              className="thumb"
              src="assets/images/image-product-1-thumbnail.jpg"
              alt=""
            />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {data} &nbsp;
                <span>${125 * data}.00</span>
              </p>
            </div>
            <button onClick={remove}>
              <img src="assets/images/icon-delete.svg" alt="" />
            </button>
          </div>
          <button className="check-btn">Checkout</button>
        </div>
      )}
    </div>
      </nav>
    </div>
  );
}

export default Navbar;
