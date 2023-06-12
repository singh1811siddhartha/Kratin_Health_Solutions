import React, { useState, useEffect } from "react";
import {Container,Row, Col} from 'react-bootstrap';
import PropTypes from "prop-types";

const Routine = ({formData})=> {
    console.log(formData);
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
  
  const generateRoutine = () => {

    
    return (
      <div className="health-solutions" style={{ backgroundColor: "beige" }}>
        <Container className="justify-content-center">
       
        <h2>Customer Profile:</h2>
        <p>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        <p>Sleeping Time: {formData.sleepingTime}</p>
        <p>Sugar: {formData.hasSugar ? "yes" : "no"}</p>
        <p>Blood Pressure: {formData.hasBloodPressure ? "yes" : "no"}</p>
        
        <h2>Routine:</h2>
        <Row>Spend 1 hours in morning by practicing yoga and performing Surya-Namaskar, Tadasana, Vrikasana, Balasana, Savasana</Row>
        <Row>{formData.hasSugar ? "15 minutes of Moring walk before yoga" : "30 minutes jogging is helpful in breathing and blood circulations"}</Row>
        <Row>{formData.hasBloodPressure ? "10 minutes of light walk thrice while keeping a break of 5 mins " : ""}</Row>
        <h3>Food Items:</h3>
        <Row>{formData.hasSugar ? "check sugar level regularly, Sugarfree tea, rice in only one meal(Lunch), eat snacks in a gap of 3 hours, Less Spicy food" : "Eat less spicy food, mild quantity of sugar or sal in meals"}</Row>
        <Row>{formData.hasBloodPressure ? "control salt intake, not very high, not very low, avoidy oily foods" : "Prefer less spicy foods, avoid fried items and junk foods"}</Row>
        </Container>
        <Row>
          <Col className="text-center mt-4">
            <p className="datetime">{date}</p>
          </Col>
        </Row>
      </div>
    );
  };

  return <div>{generateRoutine()}</div>;
};

Routine.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sleepingTime: PropTypes.string.isRequired,
  hasSugar: PropTypes.bool.isRequired,
  hasBloodPressure: PropTypes.bool.isRequired,
};

export default Routine;
