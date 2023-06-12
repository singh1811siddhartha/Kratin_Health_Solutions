import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const CustomerPage = ({setFormData}) => {
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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sleepingTime, setSleepingTime] = useState("");
  const [hasSugar, setHasSugar] = useState(false);
  const [hasBloodPressure, setHasBloodPressure] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
        name: name,
        age: age,
        sleepingTime: sleepingTime,
        hasSugar: hasSugar==="on" ? true : false,
        hasBloodPressure: hasBloodPressure==="on" ? true : false,
      })
    navigate("/routine");
    
  };

  return (
    <div style={{ backgroundColor: "beige" }}>
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Customer Page</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event)=>setName(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age(only 65+)"
                value={age}
                onChange={(event)=>setAge(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formSleepingTime">
              <Form.Label>Sleeping Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter your sleeping time"
                value={sleepingTime}
                onChange={(event)=>setSleepingTime(event.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMedicalIssues">
              <Form.Label>Medical Issues</Form.Label>
              <Form.Check
                type="checkbox"
                label="Sugar"
                checked={hasSugar}
                onChange={(event)=>setHasSugar(event.target.value)}
              />
              <Form.Check
                type="checkbox"
                label="Blood Pressure"
                checked={hasBloodPressure}
                onChange={(event)=>setHasBloodPressure(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Generate Routine
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

    <Row>
          <Col className="text-center mt-4">
            <p className="datetime">{date}</p>
          </Col>
    </Row>

    </div>
  );
};

export default CustomerPage;
