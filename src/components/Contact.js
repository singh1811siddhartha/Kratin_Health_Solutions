import React, { useState, useEffect } from "react";
import {Container,Row, Col} from 'react-bootstrap';

const Contact = () => {
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
    <div className="health-solutions" style={{ backgroundColor: "beige" }}>
      <h1>Contact</h1>
      <Container fluid className="h-100">
      <Row><Col>This page mentions about how to contact the Kratins Health Solutions for customer care.</Col></Row>
      </Container>
      <Row>
          <Col className="text-center mt-4">
            <p className="datetime">{date}</p>
          </Col>
        </Row>
    </div>
  );
};

export default Contact;
