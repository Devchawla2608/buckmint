import React from "react";
import TokenCards from "../TokenCards/TokenCards.jsx";
import Testnet from "../Testnet/Testnet.jsx";
import Button2 from "../Button2/Button2.jsx";
import TransactionBar from "../TransactionBar/TransactionBar.jsx";
import Refresh from "../Refresh/Refresh.jsx";
import Initiate from "../Initiate/Initiate.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Connect from "../Connect/Connect.jsx";
import "./Overview.css";
function Overview() {
  return (
    <div className="Overview">
      <div className="Overview_home home">
        <div className="section1">
          <Testnet />
          <Button2 />
        </div>
        <div className="section2">
          <TokenCards
            data={{
              heading: "Total Carbon Bridged (BCO2)",
              value: "21,889,951",
            }}
          />
          <TokenCards
            data={{
              heading: "Total Carbon Supply",
              value: "21,889,951",
            }}
          />
          <TokenCards
            data={{
              heading: "Total Liquidity",
              value: "$3,408,204",
            }}
          />
          <TokenCards
            data={{
              heading: "Total Carbon Retired (bCO2e)",
              value: "257,553",
            }}
          />
        </div>
        <div className="section3">
          <h1>My Carbon Assets</h1>
          <div>
            <Refresh />
            <Initiate />
          </div>
        </div>
        <div className="section4">
          <TransactionBar data={{ heading: "Open BCO2 Batches" }} />
          <TransactionBar data={{ heading: "Bunkmint CO2 Tokens (BCO2)" }} />
          <TransactionBar data={{ heading: "Carbon Pool Tokens" }} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
