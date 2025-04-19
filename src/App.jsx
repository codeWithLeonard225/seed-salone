import React from 'react'
// import Nav from './Component/Nav'
import Home  from "./Component/Pages/Home"
import About from './Component/Pages/About'
import VoicesOfImpact from './Component/Pages/VoicesOfImpact'
import MeetOurTeam from './Component/Pages/MeetOurTeam'
import ContactUs from './Component/Pages/ContactUs'
import { Routes, Route } from "react-router-dom"; // Import Route and Routes
import Entrepreneurship from './Component/Pages/Entrepreneurship '
import Education from './Component/Pages/Education '
import Environment from './Component/Pages/Environment'
import PeaceAndSecurity from './Component/Pages/PeaceAndSecurity'
import FounderMessage from './Component/Pages/FounderMessage'



const App = () => {
  return (
    
    <Routes>
       
      <Route path="/entrepreneurship" element={<Entrepreneurship />} />
      <Route path="/education" element={<Education />} />
      <Route path="/environment" element={<Environment />} />
      <Route path="/peace" element={<PeaceAndSecurity />} />
      <Route path="/founderMessage" element={<FounderMessage />} />
      {/* Add other routes here */}

      <Route
          path="/"
          element={
            <>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="bold-visionary">
                <VoicesOfImpact />
              </div>
              <div id="meet-team">
                <MeetOurTeam />
              </div>
              <div id="contact-us">
                <ContactUs />
              </div>
            </>
          }
        />
    </Routes>
  );
};

export default App;
