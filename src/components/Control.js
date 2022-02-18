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

const Control = (props) => {
  return (
    <>
      <Container className="control py-5 my-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col xs="8">
            <h1>Take full control of your platform</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </p>
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
            text="To ensure trustlessness, escrow holds funds until both parties are satisfied or to be used by arbitrator."
          />
          <ControlCard
            title="Featured Ads"
            img={ads}
            text="Showcase your ad to maximum number of users by using our decentralized platform without any limitations."
          />
        </Row>
        <Row className="justify-content-center">
          <ControlCard
            title="Governance"
            img={governance}
            text="Since it’s decentralized platform, day to day decisions should be made by community through governance"
          />
          <ControlCard
            title="Staking"
            img={staking}
            text="Maximize your rewards by staking DCLASS token, one of highest APY."
          />
          <ControlCard
            title="Orders"
            img={orders}
            text="You can place orders directly from dClass, platform charges transaction fees on orders to seller."
          />
        </Row>
      </Container>
    </>
  );
};

export default Control;
