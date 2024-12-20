/*eslint-disable */
import React from "react";

function A_TRIBUTE() {
  return (
    <div className="bg-black py-40 p-20 w-full overflow-x-hidden">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://www.jomashop.com/blog/content/images/2022/11/Untitled-design--41-.png"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto max-w-[300px] lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 text-white tracking-tighter px-6">
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            [RE]MASTER02,
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            A
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            TRIBUTE
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            TO
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            BRUTALISM
          </p>
          <span className="block mt-8 mb-8 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
          This new limited edition features an asymmetrical 41 mm rectangular case in the new 18-carat sand gold alloy and is equipped with the Calibre 7129.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
}

export default A_TRIBUTE;
