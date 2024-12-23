/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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
import Stories from "./components/Stories";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import FindUs from "./components/FindUs";
import Collection from "./components/Collection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [navbarClass, setNavbarClass] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  const DynamicNavbar = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        setNavbarClass(false);
      } else {
        setNavbarClass(true);
      }
    }, [location]);

    return <Navbar bgColor={navbarClass} />;
  };
  return (
    <>
      {/* Main Content */}
      <Router>
        <div className="w-full h-full overflow-x-hidden z-[-100]">
          {/* <Navbar /> */}
          <DynamicNavbar />
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
            <Route path="/watches" element={<Collection />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/findus" element={<FindUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<CreateAccount />} />
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
          className="fixed top-0 left-0 w-full h-full object-cover z-[-1000]"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default App;
