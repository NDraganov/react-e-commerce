import React from "react";
import "./Main.css";
import Photo from "./Photo";
import Photos from "./Photos";
import Description from "./Description";
import Buy from "./Buy";

function Main() {
  return (
    <div className="main">
      <div className="left">
        <div>
          <Photo />
        </div>
        <div>
          <Photos />
        </div>
      </div>
      <div className="right">
        <Description />
        <Buy />
      </div>
    </div>
  );
}
export default Main;
