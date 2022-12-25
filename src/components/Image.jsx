import React from "react";

function Image(props) {
  
  return (
    <div>
      <img class={props.class} src={props.img} alt="" id={props.index} onClick={props.click}/>
    </div>
  );
}

export default Image;
