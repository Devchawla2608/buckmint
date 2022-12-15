import React from "react";
import "./TransactionBar.css";
import trasactionLogo from "../../assets/icons/transactionLogo.png";

function TransactionBar({ data }) {
  return (
    <div className="transactionBarContainer">
      <h1>{data.heading}</h1>
      <section className="transactionBar">
        <div className="upperBar">
          <h1 className="upperBarIcon">ID</h1>
          <h1 className="upperBarIcon">Balance</h1>
          <h1 className="upperBarIcon">Project Name</h1>
          <h1 className="upperBarIcon">Status</h1>
          <h1 className="upperBarIcon">Action</h1>
        </div>
        <div className="transactionBarContent">
          <span className="transactionBarLogo">
            <img src={trasactionLogo} alt="" className="transactionBarImage" />
          </span>

          <h1 className="transactionBarHeading">
            You are not logged in or connected to the wrong network
          </h1>
          <p className="transactionBarText">
            Please log in and connect to the right network to see BCO2 Batches.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TransactionBar;
