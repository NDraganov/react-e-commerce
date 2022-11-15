import React, {useState} from "react";
import "./Buy.css";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import cart from "../images/icon-cart.svg";

function Buy() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="buy">
      <div className="price">
        <div className="disc-section">
          <h2 className="disc-price">$125.00</h2>
          <div className="transbox"><p className="disc">50%</p></div>
        </div>
        <p className="reg-price">$250.00</p>
      </div>
      <div className="add">
        <div className="add-buttons"> 
            <button className="btn" onClick={decrease}><RemoveOutlinedIcon /></button>
            <span className="number">{count}</span>
            <button className="btn" onClick={increase}><AddOutlinedIcon /></button>
        </div>
        <div className="add-to-cart">
          <button className="addbtn"><img className="cart" src={cart}/>Add to cart</button>
        </div>
      </div>  
    </div>
  );
}
export default Buy;