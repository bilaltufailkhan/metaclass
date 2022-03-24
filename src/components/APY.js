import React from 'react'
import { Fade } from 'react-reveal';
import { Col, Container, Row } from 'reactstrap'

const APY = () => {
  return (
    <>
      <Container className='apy'>
        <Row className='align-items-center'>
          <Col md="6" sm="12" className="my-3">
            <Fade left>
              <h1>APY</h1>
            </Fade>
          </Col>
          
          <Col md="4" sm="12" className="my-3 text-center">
            <Fade right>
              <h1 className='apy__value'>196868.1%</h1>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default APY;