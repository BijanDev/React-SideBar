import React, { useState } from "react";
import "./sidebar.css";
import { SideBarData } from "./SideBarData";
import bar from "./menu-bar.png";
// import bar from "../menu.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sideBar" style={{ width: isOpen ? "250px" : "70px" }}>
        <div className="logoTitle">
          <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
            Anoniverse
          </h1>
          <img
            src={bar}
            alt="bar"
            className="bar"
            onClick={toggle}
            style={{ margin: isOpen ? "" : "10px 0px 40px 0px" }}
          />
        </div>
        <ul className="sideBarList">
          {SideBarData.map((val, key) => {
            return (
              <li
                key={key}
                className="sideBarRow"
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => (window.location.pathname = val.link)}
                style={{ padding: isOpen ? "15px" : "15px 0px 15px 0px" }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title" style={{ display: isOpen ? "block" : "none" }}>
                  {val.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
