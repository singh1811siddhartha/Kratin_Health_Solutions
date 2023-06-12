import React, { useState, useEffect } from "react";
import {Container,Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import bg from "../components/bg.jpg";
import p1 from "../components/p1.png";

const HealthSolutions = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nowDate = new Date();
      setDate(
        nowDate.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="health-solutions"
    style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "90vh",
      }}>
      <h1 className="heading">Welcome to Kratin Health Solutions</h1>
      <Container fluid className="h-100">
      <Row>
      <Col className="para">
      Our goal here is to help you take the first step towards a healthy lifestyle. It is not just about looking good but feeling good too; 
      by feeling light and energetic (Although, no harm in getting both, right?).
      You cannot put a price on that level of confidence that you achieve, once you feel lighter and fitter.
      Based on the conditions of your health status, incorporating diseases like sugar BP (if any) keeping an eye or your work schedule 
      we try to provide you with best possible health management including diet and exercises. So that you can take 1st step towards your 
      healthier way of life.
      </Col>
      <Col style={{
        backgroundImage: `url(${p1})`,
        backgroundSize: "contain",
        height: "50vh",
      }}></Col>
      </Row>
      </Container>
      <LinkContainer to="/customerpage">
      <Button variant="primary" size="lg">
        Try it Out <FaArrowRight />
        </Button>
        </LinkContainer> 
        <Row>
          <Col className="text-center mt-4">
            <p className="datetime">{date}</p>
          </Col>
        </Row>
      
    </div>
  );
};

export default HealthSolutions;
