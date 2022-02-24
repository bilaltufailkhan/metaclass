import React from "react";
import { Col, Container, Row } from "reactstrap";

import MainNavFunc from "../components/MainNavFunc";
import Slider from "../components/Slider";
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

const StakingView = (props) => {
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

  return (
    <>
      {/* <div id="ellipse1"></div> */}
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
            <Wallet />
          </Col>

          <Col xs="12">
            <Footer theme={theme} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StakingView;
