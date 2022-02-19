import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

const DisplayAds = () => {
  return (
    <>
      <Container className="display__ads py-5 my-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col md="7" sm="12">
            <h1>Display your Ads to Cryptocurrency Enthusiasts</h1>
            <p>
              You can promote your classified ad post to millions of users,
              which we are expected to reach in next 12 months by using
              aggressive growth tactics.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center">
          <Col sm="2" className="ads__card my-4 p-4">
            <h5>2M+</h5>
            <p>Unique Visitors</p>
          </Col>
          <Col sm="2" className="ads__card my-4 p-4">
            <h5>5M+</h5>
            <p>Monthly Pageviews</p>
          </Col>
          <Col sm="2" className="ads__card my-4 p-4">
            <h5>3M+</h5>
            <p>Monthly Sessions</p>
          </Col>
          <Col sm="2" className="ads__card my-4 p-4">
            <h5>1K+</h5>
            <p>Daily Posts</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayAds;
