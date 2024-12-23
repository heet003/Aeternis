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
            className="text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl lightHeading uppercase"
          >
            Masterpiece
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.6, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            OF
          </motion.p>
          <motion.p
            variants={fadeIn("up", "tween", 0.9, 0.5)}
            initial="hidden"
            whileInView="show"
            className="italic timesfonts text-3xl sm:text-[2rem] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            PRECISION
          </motion.p>
          <span className="block mt-10 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
            A bold tribute to architectural artistry, this 42mm timepiece
            features a striking angular case crafted from premium 18-carat grey
            titanium alloy. Powered by the advanced Calibre 7129 movement, it
            merges intricate design with cutting-edge technology, embodying the
            perfect fusion of modern engineering and timeless craftsmanship.
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
