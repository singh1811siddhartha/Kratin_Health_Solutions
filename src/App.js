import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HealthSolutions from './components/HealthSolutions';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import CustomerPage from './components/CustomerPage';
import './App.css'; 
import Routine from './components/Routine';



const App = () => {

  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    sleepingTime: "",
    hasSugar: false,
    hasBloodPressure: false,
  });

  

  return (
    <div>
      <Router>
      <NavBar />
     
      <Routes>
        <Route exact path="/" element={<HealthSolutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customerpage" element={<CustomerPage setFormData={setFormData}/>} />
        <Route path="/routine" element={<Routine formData={formData}/>} />
      </Routes>
    </Router>
      
    </div>
  );
};

export default App;
