import React from "react";
import "./photos.css";
import shoes1 from "../images/image-product-1-thumbnail.jpg";
import shoes2 from "../images/image-product-2-thumbnail.jpg";
import shoes3 from "../images/image-product-3-thumbnail.jpg";
import shoes4 from "../images/image-product-4-thumbnail.jpg";

function Photos() {
  return (
    <div className="photos">
      <img className="img" src={shoes1}/>
      <img className="img" src={shoes2}/>
      <img className="img" src={shoes3}/>
      <img className="img" src={shoes4}/>
    </div>
  );
}
export default Photos;