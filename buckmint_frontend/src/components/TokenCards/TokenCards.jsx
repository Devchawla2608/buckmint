import React from "react";
import "./TokenCards.css";

function TokenCards(data) {
  console.log("This is data", data.data.heading);
  return (
    <div className="tokenCards">
      <h1 className="token_card_heading">{data.data.heading}</h1>
      <h1 className="token_amount">{data.data.value}</h1>
    </div>
  );
}

export default TokenCards;
