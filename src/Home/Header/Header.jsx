import { Button } from "@mui/material";
import React from "react";
import ReactTyped from "react-typed";
import { appHome, imageLinks } from "../../Data";
import "./Header.scss";
import Stack from "@mui/material/Stack";
import Payment from "../payment/Payment";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let naviGate = useNavigate();
  function hadnlePayClick() {
    naviGate("/payment");
  }

  return (
    <div className="mainBox">
      <img
        className="imageStyle"
        src={imageLinks.first}
        alt="Snow"
        style={{ width: "100%", height: "800px" }}
      />
      <div className="top-left">
        <p className="h2 text-danger mb-2">
          <ReactTyped
            strings={[appHome.heading, appHome.heading2]}
            loop
            typeSpeed={100}
          />
        </p>
        <p className="h5 text-white">
          <ReactTyped
            strings={[appHome.description]}
            typeSpeed={10}
          />
        </p>
        <a onClick={hadnlePayClick}>
          <Button variant="contained">হত দরিদ্রদের দান করুন</Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
