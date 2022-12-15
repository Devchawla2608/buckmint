import React from "react";
import refereshIcon from "../../assets/icons/referesh.png";
import "./Refresh.css";

function Refresh() {
  return (
    <div className="refresh">
      <img src={refereshIcon} alt="" />
      <span>Refresh</span>
    </div>
  );
}

export default Refresh;
