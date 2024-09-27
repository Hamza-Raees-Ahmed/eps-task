import React from "react";
import "./topbar.css";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <MdOutlineWatchLater />
        <h4> Mon-Fri 7am - 5pm Pacific Time </h4>
      </div>
      <div></div>
      <div className="topbar-right">
      <div  className="tele-icon">
        <BsTelephone />
        <h4>(559) 221-7230</h4>
      </div>
      <div className="mail-icon">
        <TfiEmail />
        <h4> info@epsfresno.com</h4>
      </div>
      </div>
    </div>
  );
};
export default Topbar;
