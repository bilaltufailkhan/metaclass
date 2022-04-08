import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import { Zoom, Flip, Fade, Bounce } from "react-reveal";

const DisplayAds = () => {
  return (
    <>
      <Container className="display__ads py-5 my-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col md="7" sm="12">
            <Zoom>
              <h1>Display your Ads to Cryptocurrency Enthusiasts</h1>
              <p>
                We’ve made easy for you to promote your classified ad post to
                millions of users by using aggressive growth tactics.
              </p>
            </Zoom>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center">
          <Col sm="2" className="ads__card my-4 p-4">
            <Bounce>
              <h5>2M+</h5>
              <p>Unique Visitors</p>
            </Bounce>
          </Col>
          <Col sm="2" className="ads__card my-4 p-4">
            <Bounce>
              <h5>5M+</h5>
              <p>Monthly Pageviews</p>
            </Bounce>
          </Col>
          <Col sm="2" className="ads__card my-4 p-4">
            <Bounce>
              <h5>3M+</h5>
              <p>Monthly Sessions</p>
            </Bounce>
          </Col>
          <Col sm="2" className="ads__card my-4 p-4">
            <Bounce>
              <h5>1K+</h5>
              <p>Daily Posts</p>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DisplayAds;
