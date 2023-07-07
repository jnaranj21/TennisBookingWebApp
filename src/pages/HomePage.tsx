import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button } from "../components/Button";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const [hovered, setHovered] = useState(false);

  const loginOnClick = () => {
    setHovered(true);
  };

  return (
    <div className="App">
      <Navbar />
      <Container className="container-customized">
        <Row>
          <Col xs="12" className="mt-xl-3 pt-xl-3 mt-5 pt-5">
            <p className="header-text text-center fw-bold mb-0">
              EASY<span className="text-green">TENIS</span>
            </p>
            <p className="body-text text-center">#1 TENNIS APP IN SPAIN!</p>
          </Col>
          <Col className="text-center">
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              type="button"
              onClick={loginOnClick}
            >
              BOOK COURTS
            </Button>
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              type="button"
              onClick={loginOnClick}
            >
              TAKE CLASSES
            </Button>
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              type="button"
              onClick={loginOnClick}
            >
              JOIN MATCHES
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
