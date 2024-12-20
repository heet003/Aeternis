/* eslint-disable */
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import bg from "./assets/bg.mp4";
import WatchShowcase from "./components/WatchShowcase";
import GreetingCard from "./components/GreetingCard";
import HublotWatch from "./components/HublotWatch";
import MagicGold from "./components/MagicGold";
import MiniMighty from "./components/MiniMighty";
import A_TRIBUTE from "./components/A_TRIBUTE";
import HublotArticles from "./components/HublotArticles";
import Podcast from "./components/Podcast";
import Heritage from "./components/Heritage";
import Warranty from "./components/Warranty";
import Boutique from "./components/BOUTIQUE";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Main Content */}
      <Router>
        <div className="z-10 w-full h-full overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <WatchShowcase />
                  <GreetingCard />
                  <MagicGold />
                  <HublotWatch />
                  <MiniMighty />
                  <A_TRIBUTE />
                  <HublotArticles />
                  <Podcast />
                  <Heritage />
                  <Warranty />
                  <Boutique />
                  <Newsletter />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      {/* Loader Overlay */}
      {isLoading && (
        <Loader isLoading={isLoading} onComplete={handleLoaderComplete} />
      )}
      <div className="w-[100%] h-[100%]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default App;
