/*eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInOpacity, fadeIn } from "../utils/motion";

function Warranty() {
  return (
    <div className="bg-black p-5 sm:p-20 w-full overflow-x-hidden py-40">
      <motion.div
        variants={fadeInOpacity(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://timeandtidewatches.com/wp-content/uploads/2019/11/Hublot-Classic-Fusion-Ferrari-GT-1-e1574590862924.jpg"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 space-y-1 text-white tracking-tighter px-6 lg:space-y-2">
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className=" uppercase text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl lightHeading"
          >
            Aeternis
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl lightHeading"
          >
            COVERAGE
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.7, 0.5)}
            initial="hidden"
            whileInView="show"
            className="uppercase italic timesfonts text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Protection
          </motion.p>
          <span className="block mt-10 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
            Aeternis Coverage offers a 2-year complimentary service that
            safeguards your timepiece against theft, loss, and functional
            damage, ensuring your watch stays as pristine as the day you
            received it.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Discover more
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Warranty;
