/* eslint-disable */
import React, { useState, useEffect } from "react";
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
    <>
      <div className="relative w-full h-screen overflow-hidden">
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

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>

        {/* Loader Overlay */}
        <Loader isLoading={isLoading} onComplete={handleLoaderComplete} />
      </div>
    </>
  );
}

export default App;
