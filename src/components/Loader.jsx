/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

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

      <h1 className="text-black text-xl font-medium">
        <svg
          width="100px"
          height="100px"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M109.48 16.34H84.84c-1.28 0-2.33 1.04-2.33 2.33v36.27H45.5V18.68c0-1.29-1.04-2.33-2.34-2.33H18.53a2.34 2.34 0 0 0-2.34 2.33v99.96c0 1.29 1.05 2.33 2.34 2.33h24.63a2.34 2.34 0 0 0 2.34-2.33V76.15h37.02v42.48c0 1.29 1.05 2.33 2.33 2.33h24.64c1.29 0 2.33-1.05 2.33-2.33V18.68a2.35 2.35 0 0 0-2.34-2.34z"
            fill="#000000"
          ></path>
        </svg>
      </h1>
    </div>
  );
};

export default Loader;
