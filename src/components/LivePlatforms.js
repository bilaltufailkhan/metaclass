import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";
import LiveCard from "./global/LiveCard";

import governance from "../assets/img/governance.png";
import market from "../assets/img/ads.png";
import staking from "../assets/img/staking.png";

const LivePlatforms = () => {
  return (
    <>
      <Container className="live__platforms py-5 my-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col md="7" sm="12">
            <h1>Live Platforms, Ready to Utilize</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <LiveCard
            title="Governance"
            img={governance}
            text="Since it’s decentralized platform, day to day decisions should be made by community through governance."
          />
          <LiveCard
            title="Staking Platform"
            img={staking}
            text="Maximize your rewards by staking DCLASS token, one of highest APY"
          />
          <LiveCard
            title="Market Place"
            img={market}
            text="With dClass you can buy or sell goods and services across the world and can communicate freely without censorship or fear."
          />
        </Row>
      </Container>
    </>
  );
};

export default LivePlatforms;
