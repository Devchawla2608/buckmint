import React from "react";
import "./Sidebar.css";
import overview from "../../assets/icons/overview.png";
import bridge from "../../assets/icons/bridge.png";
import lowerPoly from "../../assets/icons/lowerPoly.png";
import buckmintLogo from "../../assets/icons/Buckmint_logo.png";
import Github from "../../assets/icons/Github.png";
import { Link } from "react-router-dom";

function Sidebar() {
  const [color, setColor] = React.useState("overview");

  return (
    <aside className="sidebar">
      <section className="upperSideBar">
        <Link to="/" className="link">
          <div
            onClick={() => {
              setColor("logo");
            }}
            className={color === "logo" ? "green sidebar_item" : "sidebar_item"}
            id="logo"
          >
            <img src={buckmintLogo} alt="" className="logoImage" />
          </div>
        </Link>

        <Link to="/" className="link">
          <div
            id="overview"
            onClick={() => {
              setColor("overview");
            }}
            className={
              color === "overview" ? "green sidebar_item" : "sidebar_item"
            }
          >
            <img src={overview} alt="" className="sidebar_icons" />
            <h1 className="sidebar_item_heading">Overview</h1>
          </div>
        </Link>

        <Link to="/bridge" className="link" id="bridge">
          <div
            id="bridge"
            onClick={() => {
              setColor(() => {
                return "bridge";
              });
            }}
            className={
              color === "bridge" ? "green sidebar_item" : "sidebar_item"
            }
          >
            <img src={bridge} alt="" className="sidebar_icons" />{" "}
            <h1 className="sidebar_item_heading">Bridge</h1>
          </div>
        </Link>

        <Link to="/pools" className="link">
          <div
            id="pools"
            onClick={() => {
              setColor("pools");
            }}
            className={
              color === "pools" ? "green sidebar_item" : "sidebar_item"
            }
          >
            <img src={lowerPoly} alt="" className="sidebar_icons" />{" "}
            <h1 className="sidebar_item_heading">Pools</h1>
          </div>
        </Link>
      </section>
      <section className="lowerSideBar">
        <div
          id="Docs"
          onClick={() => {
            setColor("Docs");
          }}
          className={color === "Docs" ? "green sidebar_item" : "sidebar_item"}
        >
          <img src={overview} alt="" className="sidebar_icons" />{" "}
          <h1 className="sidebar_item_heading">Docs</h1>
        </div>
        <div
          id="Github"
          onClick={() => {
            setColor("Github");
          }}
          className={color === "Github" ? "green sidebar_item" : "sidebar_item"}
        >
          <img src={Github} alt="" className="sidebar_icons" />{" "}
          <h1 className="sidebar_item_heading">Github</h1>
        </div>
        <div className="sidebar_item" id="footerItem">
          Legal . Privacy
        </div>
      </section>
    </aside>
  );
}

export default Sidebar;
