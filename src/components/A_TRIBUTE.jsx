/*eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInOpacity, fadeIn } from "../utils/motion";

function A_TRIBUTE() {
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
            src="https://www.jomashop.com/blog/content/images/2022/11/Untitled-design--41-.png"
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
            className="text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl lightHeading"
          >
            [RE]MASTER02,
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            A
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.7, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            TRIBUTE
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.8, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            TO
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.9, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            BRUTALISM
          </motion.p>
          <span className="block mt-10 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
            This new limited edition features an asymmetrical 41 mm rectangular
            case in the new 18-carat sand gold alloy and is equipped with the
            Calibre 7129.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Discover more
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default A_TRIBUTE;
