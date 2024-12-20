/*eslint-disable */
import React from "react";
function MagicGold() {
  return (
    <div className="bg-black  py-40 p-20 w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-3/5 flex justify-center">
          <img
            src="https://cdn.thewatchpages.com/app/uploads/2024/04/23015435/hublot-square-big-bang-unico-magic-gold-821mx0130rx-4.jpeg"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto max-w-[300px] lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-2/5 text-white space-y-1 tracking-tighter lg:space-y-2">
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            AP x KAWS
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            WELCOMES
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-4xl xl:text-5xl">
            A
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            'COMPANION'
          </p>
          <span className="block mt-8 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
            The new 42 mm Unico Split-Seconds Chronograph GMT Large Date model
            premiers the use of an innovative coloured Ceramic Gold.
          </span>
        </div>
      </div>
    </div>
  );
}

export default MagicGold;
