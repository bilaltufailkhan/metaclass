import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";

import MainNavFunc from "../components/MainNavFunc";
import Slider from "../components/Slider";
import APY from "../components/APY";
import Partners from "../components/Partners";
import Control from "../components/Control";
import MarketPlace from "../components/MarketPlace";
import DisplayAds from "../components/DisplayAds";
import SellerSection from "../components/SellerSection";
import BuyerSection from "../components/BuyerSection";
import LivePlatforms from "../components/LivePlatforms";
import RoadMap from "../components/RoadMap";
import Footer from "../components/Footer";

import "../assets/css/style.css";

import useLocalStorage from "use-local-storage";
import Switch from "react-switch";
import TokenDist from "../components/TokenDist";
import Wallet from "../components/Wallet";
import SideSocials from "../components/global/SideSocials";

const AdminView = (props) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = React.useState("light");
  const [checked, setChecked] = React.useState(false);

  const switchTheme = () => {
    console.log("*****checked****", checked);
    if (theme == "light") {
      setTheme("dark");
      setChecked(true);
    } else {
      setTheme("light");
      setChecked(false);
    }
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300 && window.innerWidth > 768) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {/* <div id="ellipse1"></div> */}
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i class="fa-solid fa-chevron-up"></i>
        </button>
      )}
      {/* <SideSocials /> */}
      <Container fluid className="bgSetting" data-theme={theme}>
        <Row>
          <Col xs="12">
            <MainNavFunc
              checked={checked}
              switchTheme={switchTheme}
              theme={theme}
            />
          </Col>
          <Col xs="12">
            <Slider theme={theme} />
          </Col>
          <Col xs="12">
            <APY theme={theme} />
          </Col>
          <Col xs="12">
            <Partners theme={theme} />
          </Col>
          <Col xs="12">
            <Control />
          </Col>
          <Col xs="12">
            <MarketPlace theme={theme} />
          </Col>
          <Col xs="12">
            <DisplayAds />
          </Col>
          <Col xs="12">
            <SellerSection theme={theme} />
          </Col>
          <Col xs="12">
            <BuyerSection theme={theme} />
          </Col>
          <Col xs="12">
            <TokenDist theme={theme} />
          </Col>
          <Col xs="12">
            <LivePlatforms />
          </Col>
          <Col xs="12">
            <RoadMap />
          </Col>
          <Col xs="12">
            <Footer theme={theme} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminView;
