import React from 'react'
import Nav from './Component/Nav'
import Home  from "./Component/Pages/Home"
import About from './Component/Pages/About'
import VoicesOfImpact from './Component/Pages/VoicesOfImpact'
import MeetOurTeam from './Component/Pages/MeetOurTeam'
import { Routes, Route } from "react-router-dom"; // Import Route and Routes


const App = () => {
  return (
    
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
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
            </>
          }
        />
    </Routes>
  );
};

export default App;
