import React from "react";
import Testnet from "../Testnet/Testnet.jsx";
import Button2 from "../Button2/Button2.jsx";
import TransactionBar from "../TransactionBar/TransactionBar.jsx";
import Refresh from "../Refresh/Refresh.jsx";
import Initiate from "../Initiate/Initiate.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./Bridge.css";

function Bridge() {
  return (
    <div className="bridge">
      <div className="bridge_home home">
        <div className="bridge_section1 section1">
          <Testnet />
          <Button2 />
        </div>
        <div className="bridge_section3 section3">
          <h1>My Carbon Assets</h1>
          <div>
            <Refresh />
            <Initiate />
          </div>
        </div>
        <div className="bridge_section4 section4">
          <TransactionBar data={{ heading: "Open BCO2 Batches" }} />
        </div>
      </div>
    </div>
  );
}

export default Bridge;
