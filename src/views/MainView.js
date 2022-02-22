import React from "react";
import { Col, Container, Row } from "reactstrap";

import MainNav from "../components/MainNavFunc";
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

const AdminView = (props) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = React.useState("light");

  const switchTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Container fluid className="bgSetting" data-theme={theme}>
        <Row>
          <Col xs="12">
            <button
              style={{
                background: "#efefef",
                width: "auto",
                height: "auto",
                marginTop: "10rem",
                position: "fixed",
                top: "-21%",
                right: "10%",
                zIndex: "300010",
              }}
              onClick={switchTheme}
              className="p-2"
            >
              <i
                class={
                  theme == "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"
                }
              ></i>
            </button>
            <MainNav />
          </Col>
          <Col xs="12">
            <Slider />
          </Col>
          <Col xs="12">
            <Partners />
          </Col>
          <Col xs="12">
            <Control />
          </Col>
          <Col xs="12">
            <MarketPlace />
          </Col>
          <Col xs="12">
            <DisplayAds />
          </Col>
          <Col xs="12">
            <SellerSection />
          </Col>
          <Col xs="12">
            <BuyerSection />
          </Col>
          <Col xs="12">
            <LivePlatforms />
          </Col>
          <Col xs="12">
            <RoadMap />
          </Col>
          <Col xs="12">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminView;
