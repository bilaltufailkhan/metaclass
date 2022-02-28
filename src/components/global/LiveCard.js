import React from "react";
import "../../assets/css/style.css";

import { Col } from "reactstrap";
import { Bounce, Zoom, Flip } from "react-reveal";

import { Link } from "react-router-dom";

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
          <Link
            to="/staking"
            style={{ marginTop: `${props.margin}`, height: "5rem" }}
            className="liveCard__btn"
          >
            {props.btnTitle}
          </Link>
        </Flip>
      </Col>
    </>
  );
};

export default LiveCard;
