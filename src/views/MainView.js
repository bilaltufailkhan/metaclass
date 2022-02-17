import React from "react";
import { Col, Container, Row } from "reactstrap";

import MainNav from "../components/MainNav";

import "../assets/css/style.css";

const AdminView = (props) => {
  return (
    <>
      <Container fluid>
        <Row className="bgSetting">
          <Col xs="12">
            <MainNav />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminView;
