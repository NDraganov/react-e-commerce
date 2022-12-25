import React from "react";
import "./Main.css";
import bootstrap from 'bootstrap';
import Description from "./Description";
import Buy from "./Buy";
import Photo from "./Photo";
import Gallery from "./Gallery";
// import Photos from "./Photos";

function Main() {
  const galleryImages = [
    {
      img: 'assets/images/image-product-1-thumbnail.jpg'
    },
    {
      img: "assets/images/image-product-2-thumbnail.jpg"
    },
    {
      img: "assets/images/image-product-3-thumbnail.jpg"
    },
    {
      img: "assets/images/image-product-4-thumbnail.jpg"
    }
  ]
  const galleryImagesBig = [
    {
      img: 'assets/images/image-product-1.jpg'
    },
    {
      img: "assets/images/image-product-2.jpg"
    },
    {
      img: "assets/images/image-product-3.jpg"
    },
    {
      img: "assets/images/image-product-4.jpg"
    }
  ]
  return (
    <div className="container row pl-20 pt-24 flex">
      <div className="col-lg-6 col-sm-12 6/12 pr-14">
        <div className="">
          <Photo />
          <Gallery 
          galleryImages={galleryImages}
          galleryImagesBig={galleryImagesBig} />
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 w-6/12">
        <Description />
        <Buy />
      </div>
    </div>
  );
}
export default Main;
