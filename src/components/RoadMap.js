import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/style.css";

import line from "../assets/img/Line.png";
import line2 from "../assets/img/Line2.png";

import smallLine from "../assets/img/line.svg";

import { Bounce, Fade, Flip, Zoom } from "react-reveal";

class RoadMap extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };

  componentWillUnmount = () => {
    window.addEventListener("resize", this.handleResize);
  };
  render() {
    const { windowWidth } = this.state;
    return (
      <>
        <Container className="roadmap py-5 my-5">
          <Row className="justify-content-center align-items-center text-center">
            <Col md="7" sm="12">
              <Zoom>
                <h1>Product Roadmap</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et.
                </p>
              </Zoom>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center my-5">
            <Col md="3" sm="12" className="roadmap__card p-4">
              <Bounce>
                <h5>2021- Q3</h5>
                <ul>
                  <li>Fair Launch (no-presale)</li>
                  <li>Staking</li>
                  <li>Governance</li>
                  <li>Exchange Listing</li>
                </ul>
              </Bounce>
            </Col>
            <Col md="4" sm="12" className="line__img">
              <Zoom>
                <img
                  src={windowWidth > 992 ? line : smallLine}
                  className="smallLine lineMove"
                />
              </Zoom>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center my-5">
            <Col md="4" sm="12" className="line__imgRight order-2 order-md-1">
              <Zoom>
                <img
                  src={windowWidth > 992 ? line2 : smallLine}
                  className="smallLine lineMove1"
                />
              </Zoom>
            </Col>
            <Col
              md="3"
              sm="12"
              className="roadmap__card p-4 order-1 order-md-2"
            >
              <Bounce>
                <h5>2021- Q4</h5>
                <ul>
                  <li>Classified Ads Platform</li>
                  <li>Featured Ads</li>
                  <li>Escrow</li>
                  <li>Marketing</li>
                </ul>
              </Bounce>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center my-5">
            <Col md="3" sm="12" className="roadmap__card p-4">
              <Bounce>
                <h5>2022- Q1</h5>
                <ul>
                  <li>100K users on platform</li>
                  <li>Mobile Application and Wallet</li>
                </ul>
              </Bounce>
            </Col>
            <Col md="4" sm="12" className="line__img">
              <Zoom>
                <img
                  src={windowWidth > 992 ? line : smallLine}
                  className="smallLine lineMove"
                />
              </Zoom>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center my-5">
            <Col md="4" sm="12" className="p-4">
              {/* <img src={line2} width="50%" height="auto" /> */}
            </Col>
            <Col md="3" sm="12" className="roadmap__card p-4">
              <Bounce>
                <h5>2022- Q2</h5>
                <ul>
                  <li>2 Million Users</li>
                  <li>5 Million Monthly Pageviews</li>
                  <li>3 Million Monthly Sessions</li>
                  <li>1 Thousand Daily Posts</li>
                </ul>
              </Bounce>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default RoadMap;
