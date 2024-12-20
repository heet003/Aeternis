/*eslint-disable */
import React from "react";
import { motion } from "framer-motion";

function Warranty() {
  return (
    <div className="bg-black py-40 p-20 w-full overflow-x-hidden">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://timeandtidewatches.com/wp-content/uploads/2019/11/Hublot-Classic-Fusion-Ferrari-GT-1-e1574590862924.jpg"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto max-w-[300px] lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 text-white tracking-tighter px-6">
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            HUBLOT
          </p>
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            COVERAGE
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            SERVICE
          </p>
          <span className="block mt-8 mb-8 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
            The Hublot Coverage Service is a 2-year complimentary service protecting
            Hublot watches from burglary and robbery as well as functional damage.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Warranty;
