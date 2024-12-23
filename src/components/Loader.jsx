/*eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { H } from "../assets";

const Loader = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef();

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 10);

      if (progress === 100) {
        clearInterval(interval);
        gsap.to(loaderRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: onComplete,
        });
      }

      return () => clearInterval(interval);
    }
  }, [progress, isLoading, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex items-center justify-center bg-white z-[10000]"
    >
      {/* Progress bar */}
      <div
        className="absolute top-0 left-0 h-[4px] rounded-xl bg-black"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Centered Logo */}
      <div>
        <LogoIcon className="#000000" />
      </div>
    </div>
  );
};

const LogoIcon = ({ className }) => (
  <svg height="50" width="auto" xmlns="http://www.w3.org/2000/svg">
    <text
      x="10"
      y="40"
      fill="black"
      fontFamily="Arial, sans-serif"
      fontSize="40"
      fontWeight="bold"
      letterSpacing="2"
      textShadow="none"
      style={{ textShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.8)" }}
    >
      AETERNIS
    </text>

    <text
      x="10"
      y="40"
      fill={className}
      fontFamily="Arial, sans-serif"
      fontSize="40"
      fontWeight="bold"
      letterSpacing="2"
    >
      AETERNIS
    </text>
  </svg>
);

export default Loader;
