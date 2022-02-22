import React from "react";
import "../../assets/css/style.css";

import { Col } from "reactstrap";
import { Bounce, Zoom, Flip } from "react-reveal";

const LiveCard = (props) => {
  return (
    <>
      <Col md="3" sm="6" xs="12" className="live__card p-5 m-4">
        <Zoom>
          <img src={props.img} width="70px" height="auto" />
        </Zoom>
        <Bounce>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </Bounce>
        <Flip left>
          <button type="link" href="#" className="liveCard__btn">
            Launch App
          </button>
        </Flip>
      </Col>
    </>
  );
};

export default LiveCard;
