import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LoadScreen = () => {
  return (
    <Container style={{ height: "100%" }}>
      <Row>
        <Col>
          <Spinner animation="grow" variant="success" className='m-auto'>
            <span className='visually-hidden'>Cargando...</span>
          </Spinner>
        </Col>
      </Row>
    </Container>
  )
}

export default LoadScreen