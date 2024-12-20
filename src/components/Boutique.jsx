/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import { fadeInOpacity, fadeIn } from "../utils/motion";

function Boutique() {
  return (
    <div className="bg-white text-black py-40 px-20 w-full overflow-x-hidden">
      <motion.div
        variants={fadeInOpacity(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col lg:flex-row items-center lg:items-center gap-8"
      >
        {/* Image Section */}
        <div className="w-full lg:w-3/5 flex justify-center">
          <img
            src="https://traveltipzone.com/wp-content/uploads/5-day-switzerland-itinerary-how-to-spend-5-days-in-switzerland-lucerne2-1200x600.jpg"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto max-w-[300px] lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6">
          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lightHeading"
          >
            FIND A
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          >
            BOUTIQUE
          </motion.p>
          <a
            href="#"
            className="discover-more-black cursor-pointer mt-4 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            Explore All Boutiques
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Boutique;
