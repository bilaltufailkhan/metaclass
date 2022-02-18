import React from "react";
import { Col, Container, Row } from "reactstrap";

import MainNav from "../components/MainNav";

import "../assets/css/style.css";
import Slider from "../components/Slider";
import Partners from "../components/Partners";
import Control from "../components/Control";

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
        </Row>
      </Container>
    </>
  );
};

export default AdminView;
