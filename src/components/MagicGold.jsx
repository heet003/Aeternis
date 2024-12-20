/*eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInOpacity, fadeIn } from "../utils/motion";
function MagicGold() {
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
            src="https://cdn.thewatchpages.com/app/uploads/2024/04/23015435/hublot-square-big-bang-unico-magic-gold-821mx0130rx-4.jpeg"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto lg:max-w-none"
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
            AP x KAWS
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            WELCOMES
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            A
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            'COMPANION'
          </motion.p>
          <span
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="block mt-8 font-extralight text-xs sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal"
          >
            The new 42 mm Unico Split-Seconds Chronograph GMT Large Date model
            premiers the use of an innovative coloured Ceramic Gold.
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default MagicGold;
