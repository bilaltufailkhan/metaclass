import React from "react";
import { Col, Container, Row } from "reactstrap";

import MainNav from "../components/MainNav";

import "../assets/css/style.css";
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

const AdminView = (props) => {
  return (
    <>
      <Container fluid className="bgSetting">
        <Row>
          <Col xs="12">
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
