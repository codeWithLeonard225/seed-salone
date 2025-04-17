import React from 'react'
import Nav from './Component/Nav'
import Home  from "./Component/Pages/Home"
import About from './Component/Pages/About'
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
              {/* <div id="service">
                <Service />
              </div> */}
              {/* <div id="team">
                <Team1 />
              </div> */}
            </>
          }
        />
    </Routes>
  );
};

export default App;
