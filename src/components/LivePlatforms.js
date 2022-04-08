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
              Metaverse is a decentralized hotline technological network of 3D
              virtual worlds subjected to converge physical, augmented, and
              virtual reality in a shared online space powered by an open
              blockchain technology that encompasses digital assets and digital
              identities.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <LiveCard
            title="Governance"
            img={governance}
            btnTitle="Launch App"
            text="Since it’s decentralized platform, day to day decisions should be made by community through governance."
          />
          <LiveCard
            title="Staking Platform"
            img={staking}
            btnTitle="Launch App"
            text={`Maximize your rewards by staking MCLS token, one of highest APY`}
          />
          <LiveCard
            title="Market Place"
            img={market}
            btnTitle="Coming Soon"
            text="With MCLS you can buy or sell goods and services across the world and can communicate freely without censorship or fear."
          />
        </Row>
      </Container>
    </>
  );
};

export default LivePlatforms;
