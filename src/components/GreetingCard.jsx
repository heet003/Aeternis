/*eslint-disable */
import React from "react";
import { greeting } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const GreetingCard = () => {
  return (
    <div className="bg-black text-white p-5 md:p-20 space-y-8 w-full">
      {/* Text Section */}
      <div className="space-y-8">
        <motion.h1
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-4xl sm:text-5xl lg:text-6xl
        lightHeading tracking-tighter uppercase font-extralight"
        >
          2025 Greetings <br />
          <motion.span
            variants={fadeIn("up", "tween", 0.6, 0.6)}
            initial="hidden"
            whileInView="show"
            className="timesfonts italic"
          >
            From Us
          </motion.span>
        </motion.h1>
        <div className="sm:px-28 px-5 space-y-8 font-extralight">
          <motion.p
            variants={fadeIn("up", "tween", 0.7, 0.7)}
            initial="hidden"
            whileInView="show"
            className="text-md sm:text-lg xl:text-xl"
          >
            This year, our team let their imaginations run wild for our upcoming
            milestone celebration, and let's just say, things got creative!
          </motion.p>
          <motion.a
            variants={fadeIn("up", "tween", 0.8, 0.8)}
            initial="hidden"
            whileInView="show"
            href="#"
            className="discover-more text-xs sm:text-md xl:text-lg tracking-wider "
          >
            Discover more
          </motion.a>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4 lg:px-36 sm:px-10">
        <motion.div
          variants={fadeIn("right", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-lg"
          >
            <source src={greeting} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
        >
          <img
            src="https://images.pexels.com/photos/5814085/pexels-photo-5814085.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Celebration Moment"
            className="w-full h-full rounded-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GreetingCard;
