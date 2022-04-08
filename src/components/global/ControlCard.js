import React from "react";
import "../../assets/css/style.css";

import { Col } from "reactstrap";
import { Flip, Zoom } from "react-reveal";

const ControlCard = (props) => {
  return (
    <>
      <Col md="3" sm="6" xs="12" className="control__card p-5 m-4">
        <Zoom>
          <img src={props.img} width="70px" height="auto" />
        </Zoom>
        <Flip left>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </Flip>
      </Col>
    </>
  );
};

export default ControlCard;
