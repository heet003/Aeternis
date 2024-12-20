/*eslint-disable */
import React from "react";
import { hublotWatch } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity } from "../utils/motion";

const HublotWatch = () => {
  return (
    <div className="bg-black py-40 text-white p-20 space-y-8 w-full">
      {/* Text Section */}
      <div className="space-y-8">
        <motion.h1
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-5xl lightHeading tracking-tighter uppercase font-extralight"
        >
          Square Bang
          <br />
          <motion.span
            variants={fadeIn("up", "tween", 0.6, 0.6)}
            initial="hidden"
            whileInView="show"
            className="timesfonts italic"
          >
            Unico Ceramic Magic Gold
          </motion.span>
        </motion.h1>
        <div className="px-28 space-y-8 font-extralight">
          <motion.p
            variants={fadeIn("up", "tween", 0.7, 0.7)}
            initial="hidden"
            whileInView="show"
            className="text-lg"
          >
            The new 42 mm Unico Split-Seconds Chronograph GMT Large Date model
            premiers the use of an innovative coloured Ceramic Gold.
          </motion.p>
          <motion.a
            variants={fadeIn("up", "tween", 0.8, 0.8)}
            initial="hidden"
            whileInView="show"
            href="#"
            className="text-sm tracking-wider discover-more "
          >
            Discover more
          </motion.a>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4 px-36">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <img
            src="https://cdn.thewatchpages.com/app/uploads/2024/04/23015435/hublot-square-big-bang-unico-magic-gold-821mx0130rx-4.jpeg"
            alt="Celebration Moment"
            className="w-[25rem] h-[30rem]"
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
            className="object-cover w-[25rem] h-[30rem]"
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
