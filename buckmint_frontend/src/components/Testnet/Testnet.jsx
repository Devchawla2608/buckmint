import React from "react";
import refereshIcon from "../../assets/icons/referesh.png";
import dropdownIcon from "../../assets/icons/dropdown.png";
import Celo from "../../assets/icons/celo.png";
import Polygon from "../../assets/icons/polygon.png";
import Button2 from "../Button2/Button2";
import "./Testnet.css";

function Testnet() {
  return (
    <div class="btn-group dropdown_container">
      <button
        class="btn btn-secondary btn-sm dropdown-toggle button1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {" "}
        <img src={Polygon} alt="connect" className="refreshImage" />
        <span className="button1Heading">Polygon Testnet</span>
        <img src={dropdownIcon} alt="dropdownIcon" className="dropdownImage" />
      </button>

      <ul className="dropdown-menu">
        <li className="dropdownOptions">
          <img src={Polygon} alt="connect" className="refreshImage" />
          <h1> Polygon Testnet</h1>
        </li>
        <li className="dropdownOptions">
          <img src={Celo} alt="connect" className="refreshImage" />
          <h1> Celo Testnet</h1>
        </li>
      </ul>
    </div>

    // <h1>GJIHDFS</h1>
    // <div className="dropdown button1">
    //   <button
    //     className="btn btn-secondary dropdown-toggle"
    //     type="button"
    //     data-bs-toggle="dropdown"
    //     aria-expanded="false"
    //   >
    //     Dropdown button
    //   </button>
    //   <ul className="dropdown-menu">
    //     <li>
    //       <a className="dropdown-item" href="/#">
    //         <img src={refereshIcon} alt="connect" className="refreshImage" />
    //         <span> Polygon Testnet</span>
    //         <img
    //           src={dropdownIcon}
    //           alt="dropdownIcon"
    //           className="dropdownImage"
    //         />
    //       </a>
    //     </li>
    //     <li>
    //       <a className="dropdown-item" href="/#">
    //         <img src={refereshIcon} alt="connect" className="refreshImage" />
    //         <span> Polygon Testnet</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a className="dropdown-item" href="/#">
    //         <img src={refereshIcon} alt="connect" className="refreshImage" />
    //         <span> Celo Testnet</span>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Testnet;
