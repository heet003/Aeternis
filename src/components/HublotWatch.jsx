/*eslint-disable */
import React from "react";
import { hublotWatch } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity } from "../utils/motion";

const HublotWatch = () => {
  return (
    <div className="bg-black py-40 text-white p-5 md:p-20 space-y-8 w-full overflow-x-hidden">
      {/* Text Section */}
      <div className="space-y-8">
        <motion.h1
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl sm:text-5xl lg:text-6xl lightHeading tracking-tighter uppercase"
        >
          Eterna Chrono
          <br />
          <motion.span
            variants={fadeIn("up", "tween", 0.6, 0.6)}
            initial="hidden"
            whileInView="show"
            className="timesfonts italic uppercase"
          >
            Ceramic Sapphire Radiance
          </motion.span>
        </motion.h1>
        <div className="sm:px-28 px-5 space-y-8  font-extralight">
          <motion.p
            variants={fadeIn("up", "tween", 0.7, 0.7)}
            initial="hidden"
            whileInView="show"
            className="text-md sm:text-lg xl:text-xl"
          >
            Introducing the 42 mm Ceramic Sapphire Radiance, a masterpiece that
            combines advanced craftsmanship with a bold and innovative ceramic
            sapphire design. Perfectly blending precision and elegance, it sets
            a new benchmark in luxury timepieces.
          </motion.p>
          <motion.a
            variants={fadeIn("up", "tween", 0.8, 0.8)}
            initial="hidden"
            whileInView="show"
            href="#"
            className="discover-more text-xs sm:text-md xl:text-lg tracking-wider "
          >
            Explore the Collection
          </motion.a>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-rows-2 lg:grid-cols-2 gap-4 lg:px-36 sm:px-10">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <img
            src="https://cdn.thewatchpages.com/app/uploads/2024/04/23015435/hublot-square-big-bang-unico-magic-gold-821mx0130rx-4.jpeg"
            alt="Celebration Moment"
            className="object-contain sm:object-cover w-full h-full lg:w-[25rem] lg:h-auto"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-contain sm:object-cover w-full h-full lg:w-[25rem] lg:h-auto"
          >
            <source src={hublotWatch} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default HublotWatch;
