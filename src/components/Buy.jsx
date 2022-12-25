import React, {useState} from "react";
import bootstrap from "bootstrap";
import "./Buy.css";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Buy() {
  const [count, setCount] = useState(0);


  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  const addChart = () => {
    const get = JSON.parse(localStorage.getItem('data')) || null;
    localStorage.setItem('data', JSON.stringify(get + count));
    window.location.reload();
  };

  return (
    <div className="buy">
      <div className="price">
        <div className="disc-section">
          <h2 className="disc-price">$125.00</h2>
          <div className="transbox"><p className="disc">50%</p></div>
        </div>
        <p className="reg-price">$250.00</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 add-buttons"> 
              <button className="btn" onClick={decrease} disabled={count === 0 || (count < 0 && true)}><RemoveOutlinedIcon /></button>
              <span className="number">{count}</span>
              <button className="btn" onClick={increase}><AddOutlinedIcon /></button>
          </div>
          <div className="col-lg-6 col-md-12 add-to-cart">
            <button className="addbtn" onClick={addChart} disabled={count === 0 || (count < 0 && true)}><img className="cart" src="assets/images/icon-cart.svg"/>Add to cart</button>
          </div>
        </div>
      </div>  
    </div>
  );
}
export default Buy;