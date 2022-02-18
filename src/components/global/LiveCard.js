import React from "react";
import "../../assets/css/style.css";

import { Col } from "reactstrap";

const LiveCard = (props) => {
  return (
    <>
      <Col md="3" sm="6" xs="12" className="live__card p-5 m-4">
        <img src={props.img} width="70px" height="auto" />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a href="#">Launch App</a>
      </Col>
    </>
  );
};

export default LiveCard;
