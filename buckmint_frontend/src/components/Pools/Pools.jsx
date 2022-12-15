import React from "react";
import Testnet from "../Testnet/Testnet.jsx";
import Button2 from "../Button2/Button2.jsx";
import TransactionBar from "../TransactionBar/TransactionBar.jsx";
import Refresh from "../Refresh/Refresh.jsx";
import "./Pools.css";
import Sidebar from "../Sidebar/Sidebar.jsx";

function Pools() {
  return (
    <div className="pools">
      <div className="pools_home home">
        <section className="pools_section1 section1">
          <Testnet />
          <Button2 />
        </section>
        <section className="pools_section3 section3">
          <h1>My Pool Assets</h1>
          <div>
            <Refresh />
          </div>
        </section>
        <section className="pools_section4 section4">
          <TransactionBar data={{ heading: "Toucan CO2 Tokens (TCO2)" }} />
          <TransactionBar data={{ heading: "Carbon Pool Tokens" }} />
        </section>
      </div>
    </div>
  );
}

export default Pools;
