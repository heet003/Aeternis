/* eslint-disable */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import bg from "./assets/bg.mp4";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>

        {/* Loader Overlay */}
        {isLoading && <Loader isLoading={isLoading} onComplete={handleLoaderComplete} />}
      </div>
    </Router>
  );
}

export default App;
