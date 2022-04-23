import React from "react";
import AfterHeaderCards from "../Home/AfterHeaderCards/AfterHeaderCards";
import Footer from "../Home/Footer/Footer";
import FunderisingCommunity from "../Home/FunderisingCommunity/FunderisingCommunity";
import Header from "../Home/Header/Header";
import Navigationbar from "../Home/NavigationBar/Navigationbar";
import WhoWeAre from "../Home/whoWeAre/WhoWeAre";

const Main = () => {
  return (
    <div>
      <Navigationbar />
      <Header />
      <AfterHeaderCards />
      <WhoWeAre />
      <FunderisingCommunity />
      <Footer />
    </div>
  );
};

export default Main;
