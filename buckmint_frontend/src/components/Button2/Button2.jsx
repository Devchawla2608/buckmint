import React from "react";
import "./Button2.css";
import rightArrow from "../../assets/icons/rightArrow.png";
import metamask from "../../assets/icons/metamask.png";
import x from "../../assets/icons/Vector.svg";
import WalletConnect from "../../assets/icons/walletconnect.png";
import CoinbaseWallet from "../../assets/icons/coinbasewallet.png";
import $ from "jquery";
function Button2() {
  // function Func() {
  //   $(document).off("focusin.modal");
  // }
  return (
    <div
      className="button2"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      <img src={x} alt="connect" className="connectIcon" />
      <h1 id="connectButtonText"> connect wallet</h1>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content walletModal">
            <div class="modal-header walletHeader">
              <h1 class="modal-title fs-5 walletHeading">
                Connect Your Wallet
              </h1>
              <button
                type="button"
                class="btn-close walletCrossButton"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h2 className="walletDetails">
                Use an existing Web3 wallet to connect to Toucan
              </h2>
              <button className="walletOptions">
                <div className="wallet">
                  <img src={metamask} alt="" className="walletImages" />
                  <h3>Meta Mask</h3>
                </div>

                <img src={rightArrow} alt="" />
              </button>
              <button className="walletOptions">
                <div className="wallet">
                  <img src={WalletConnect} alt="" className="walletImages" />
                  <h3>Wallet Connect</h3>
                </div>
                <img src={rightArrow} alt="" />
              </button>
              <button className="walletOptions">
                <div className="wallet">
                  <img src={CoinbaseWallet} alt="" className="walletImages" />
                  <h3>Coinbase Wallet</h3>
                </div>
                <img src={rightArrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button2;

// <!-- Vertically centered modal -->
// <div class="modal-dialog modal-dialog-centered">
//   ...
// </div>

// <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
//   ...
// </div>
