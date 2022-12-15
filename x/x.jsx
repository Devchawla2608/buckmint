import React from "react";
import "./x.css";
import Refresh from "../../assets/icons/referesh.png";
function X() {
  const [show, setShow] = React.useState(false);

  function handleOver() {
    console.log("over");
    setShow(true);
  }
  function handleOut() {
    console.log("out");
    setShow(false);
  }
  return (
    <div className="f">
      <div id="popover" className={show ? "show" : "hide"}>
        I am hero
      </div>
      <img
        src={Refresh}
        alt=""
        onMouseEnter={handleOver}
        onMouseLeave={handleOut}
      />
    </div>
  );
}

export default X;
