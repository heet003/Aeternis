/*eslint-disable */
import React from "react";

function Heritage() {
  return (
    <div className="bg-black  py-40 p-20 w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
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
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            Musée
          </p>
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            Atelier 
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            HUBLOT
          </p>
          <span className="block mt-8 mb-8 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
          Experience our heritage, craftsmanship and connection to the world in the Musée Atelier Hublot which pays tribute to the craftspeople who have made what Hublot is today, generation after generation.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Heritage;
