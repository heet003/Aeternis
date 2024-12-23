/* eslint-disable */
import React from "react";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className={`relative min-h-screen w-full p-5 -z-20 text-white`}>
        {/* Left Side - Text */}
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
          className="absolute top-5 left-8 sm:left-16 md:top-6 lg:top-0 lg:left-24 hero-div w-5/12"
        >
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl uppercase">
            AETERNIS
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl uppercase">
            Timeless
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-4xl xl:text-6xl uppercase">
            Luxury
          </p>
          <span className="block mt-8 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Explore the art of precision and elegance with Aeternis. Our
            timepieces are crafted to transcend trends and embody the spirit of
            enduring sophistication.
          </span>
          <a className="discover-more cursor-pointer relative top-16 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Discover more
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
