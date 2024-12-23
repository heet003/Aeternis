/*eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInOpacity, fadeIn } from "../utils/motion";

function Heritage() {
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
            src="https://www.holidify.com/images/cmsuploads/compressed/230046821552965bf6b03k_20230511174834.jpg"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto max-w-[300px] lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-2/5 text-white tracking-tighter px-6">
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading"
          >
            THE
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading"
          >
            LEGACY
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.7, 0.5)}
            initial="hidden"
            whileInView="show"
            className="uppercase italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl"
          >
            OF Aeternis
          </motion.p>
          <span className="block mt-8 mb-8 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
            Step into the world of Aeternis, where time is not just measured,
            but celebrated. Our ateliers preserve a legacy of exceptional
            craftsmanship, blending tradition with innovation to create timeless
            masterpieces that stand as symbols of elegance and precision.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Explore our Legacy
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Heritage;
