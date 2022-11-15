import React from "react";
import "./Photo.css";
import thumb from "../images/image-product-1.jpg";

function Photo() {
  return (
    <div>
      <img className="photo" src={thumb} />
    </div>
  );
}
export default Photo;