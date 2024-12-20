/*eslint-disable */
import React from "react";

function HublotArticles() {
  return (
    <div className="bg-black  py-40 p-20 w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-3/5 flex justify-center">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/mp-10-pr-shot-0-65c1ca54512cb.jpg?crop=1xw:0.7502679528403001xh;center,top&resize=1200:*"
            alt="Unico Ceramic Magic Gold"
            className="object-cover w-full h-auto max-w-[300px] lg:max-w-none"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-2/5 text-white tracking-tighter px-6">
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            HUBLOT
          </p>
          <p className="text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            CHRONICLES:
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
          DIVE 
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            INTO
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            HUBLOT'S
          </p>
          <p className="italic timesfonts text-4xl sm:text-[2rem] md:text-4xl lg:text-5xl xl:text-6xl">
            HISTORY
          </p>
          <span className="block mt-8 mb-8 font-extralight text-sm sm:text-base md:text-md lg:text-lg xl:text-xl tracking-normal">
          Travel back in time and immerse yourself into Hublot's universe through enriched articles, technical sheets of models and calibres as well as exclusive anecdotes and archival footages uncovered by our Heritage team.
          </span>
          <a className="discover-more cursor-pointer text-sm sm:text-base md:text-md lg:text-lg xl:text-xl">
            Explore Hublot's Chronicles
          </a>
        </div>
      </div>
    </div>
  );
}

export default HublotArticles;
