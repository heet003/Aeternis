/*eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity } from "../utils/motion";

function MiniMighty() {
  return (
    <div className="bg-black p-5 sm:p-20 w-full overflow-x-hidden py-40">
      <motion.div
        variants={fadeInOpacity(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
      >
        {/* Image Section */}
        <div className="w-full lg:w-3/5 flex justify-center">
          <img
            src="https://cdn.luxe.digital/media/20230111151119/best-luxury-watch-brands-ranking-2023-luxe-digital-1200x600.jpg"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-2/5 space-y-1 text-white tracking-tighter px-6 lg:space-y-2">
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl lightHeading"
          >
            MINI YET
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            MIGHTY
          </motion.p>
          <span className="block mt-8 font-extralight text-xs sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
            A glowing come back for the mighty Mini Royal Oak, offered for the
            first time in a 23 mm diameter and executed in a choice of 18-carat
            yellow, white or pink Frosted gold.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Discover more
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default MiniMighty;
