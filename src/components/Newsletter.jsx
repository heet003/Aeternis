/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

function Newsletter() {
  return (
    <div className="bg-white text-black py-40 sm:px-20 p-5 w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-0 lg:gap-8">
        {/* First Section  */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 p-10">
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-5xl lightHeading">
            Get the
          </p>
          <p className="italic timesfonts text-5xl sm:text-6xl md:text-7xl lg:text-5xl">
            Latest News
          </p>
        </div>
        {/* Second Section  */}
        <div className="lg:w-1/2 sm:w-1/2 w-full p-10">
          <p className=" font-extralight text-lg sm:text-[1.2rem] md:text-[1.3rem] lg:text-xl xl:text-xl tracking-tight">
            Be the first to receive the latest news on our brand, products and
            upcoming events.
          </p>
        </div>
        {/* Third Section  */}
        <div className="p-10">
          <button className="bg-black text-white px-8 py-4 text-md sm:text-lg xl:text-lg rounded-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
