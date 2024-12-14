import React, { useState, useEffect } from "react";
import './App.css';
import './Components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import CyberChip from './Components/Dashboard';
import Profile from "./Components/Profile";
import Team from "./Components/Team";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import WebsiteVerification from "./Components/WebsiteVerification";


function App() {
  // Check localStorage for login status on initial load
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("isLoggedIn"))
  );

  // Function to log in the user (e.g., after successful login)
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  // Function to log out the user
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      
     
      
      <Router>
      <Routes>
        <Route path="/" element={ <CyberChip isLoggedIn={isLoggedIn} handleLogout={handleLogout} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/signup" element={<Signup handleLogin={handleLogin}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/team" element={<Team/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/website-verification" element={<WebsiteVerification />} />
      </Routes>
    
      <Footer/> 
      </Router> 
    </div>
  );
}

export default App;
