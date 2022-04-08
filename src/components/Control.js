import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";
import ControlCard from "./global/ControlCard";

import disputable from "../assets/img/disputable.png";
import escrow from "../assets/img/escrow.png";
import ads from "../assets/img/ads.png";
import governance from "../assets/img/governance.png";
import staking from "../assets/img/staking.png";
import orders from "../assets/img/orders.png";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Control = (props) => {
  return (
    <>
      <Container className="control py-5 my-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col md="8" sm="12">
            <Zoom>
              <h1>Take full control of your platform</h1>
              <p>
                Metaverse is a decentralized hotline technological network of 3D
                virtual worlds subjected to converge physical, augmented, and
                virtual reality in a shared online space powered by an open
                blockchain technology that encompasses digital assets and
                digital identities.
              </p>
            </Zoom>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <ControlCard
            title="Disputable"
            img={disputable}
            text="Every business that involves buyer and seller has disputes, these are resolved through arbitration."
          />
          <ControlCard
            title="Escrow"
            img={escrow}
            text="To ensure trustworthiness, escrow holds funds until both parties are satisfied or to be used by arbitrator."
          />
          <ControlCard
            title="Featured Ads"
            img={ads}
            text="Showcase your ad to the maximum number of users by using our decentralized platform without any limitations."
          />
        </Row>
        <Row className="justify-content-center">
          <ControlCard
            title="Governance"
            img={governance}
            text="Since it’s a decentralized platform, day to day decisions should be made by community through governance"
          />
          <ControlCard
            title="Staking"
            img={staking}
            text="Maximize your rewards by staking MCLS token, one of the highest APY."
          />
          <ControlCard
            title="Orders"
            img={orders}
            text="You can place orders directly from MCLS, platform charges are applicable to the seller on orders."
          />
        </Row>
      </Container>
    </>
  );
};

export default Control;
