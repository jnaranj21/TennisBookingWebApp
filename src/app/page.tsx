'use client';

import '../styles/main.scss';
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/Button';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const [hovered, setHovered] = useState(false);

  const hoveredButton = () => {
    setHovered(true);
  }
  return (
    <main className='App'>
      <Navbar />
      <Container>
        <Row>
          <Col xs='12' className="mt-xl-3 pt-xl-3 mt-5 pt-5">
            <p className="header-text text-center fw-bold mb-0">
              EASY<span className="text-green">TENIS</span>
            </p>
            <p className="body-text text-center">#1 TENNIS APP IN SPAIN!</p>
          </Col>
          <Col className="button-section">
            <Button buttonStyle="btn--outline" buttonSize="btn--large" type='button' onClick={hoveredButton}>
                BOOK COURTS
            </Button>
            <Button buttonStyle="btn--outline" buttonSize="btn--large" type='button' onClick={hoveredButton}>
                TAKE CLASSES
            </Button>
            <Button buttonStyle="btn--primary" buttonSize="btn--large" type='button' onClick={hoveredButton}>
                JOIN MATCHES
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </main>
  )
}
