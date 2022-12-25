import React from "react";
import "./photos.css";
import shoes1 from "../images/image-product-1-thumbnail.jpg";
import shoes2 from "../images/image-product-2-thumbnail.jpg";
import shoes3 from "../images/image-product-3-thumbnail.jpg";
import shoes4 from "../images/image-product-4-thumbnail.jpg";
import Image from "./Image";

function Photos(props) {
  return (
    <div className="photos">
      <Image class="img" img={shoes1}/>
      <Image class="img" img={shoes2}/>
      <Image class="img" img={shoes3}/>
      <Image class="img" img={shoes4}/>
    </div>
  );
}
export default Photos;