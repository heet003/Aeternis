/*eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInOpacity, fadeIn } from "../utils/motion";

function HublotArticles() {
  return (
    <div className="bg-black py-40 p-5 sm:p-20 w-full overflow-x-hidden">
      <motion.div
        variants={fadeInOpacity(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col lg:flex-row items-center lg:items-start gap-8"
      >
        {/* Image Section */}
        <div className="w-full lg:w-3/5 flex justify-center">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/mp-10-pr-shot-0-65c1ca54512cb.jpg?crop=1xw:0.7502679528403001xh;center,top&resize=1200:*"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto max-w-[300px] lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-2/5 text-white space-y-1 tracking-tighter lg:space-y-2">
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl lightHeading"
          >
            LEGENDARY
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl lightHeading"
          >
            TIMEPIECES:
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.7, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            JOURNEY
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.8, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            THROUGH
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.9, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            TIMELESS
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 1, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            CRAFT
          </motion.p>
          <span className="block mt-8 font-extralight text-xs sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
          Immerse yourself in the rich legacy of watchmaking craftsmanship. Delve into fascinating stories, in-depth timepiece specifications, and exclusive insights brought to life through expert narration and rare archival content.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Explore 
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default HublotArticles;
