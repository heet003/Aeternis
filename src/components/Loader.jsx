/* eslint-disable */
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
      }, 20);

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
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
    >
      <div
        className="absolute top-0 left-0 h-[4px] rounded-xl bg-black"
        style={{ width: `${progress}%` }}
      ></div>

      <img src={H} alt="logo" />
    </div>
  );
};

export default Loader;
