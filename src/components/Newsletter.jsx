/* eslint-disable */
import React from "react";

function Newsletter() {
  return (
    <div className="bg-white text-black py-40 px-20 w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-end lg:items-baseline gap-8">
        {/* First Section  */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 p-10">
          <p className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lightHeading">
            Get the
          </p>
          <p className="italic timesfonts text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Latest News
          </p>
        </div>
        {/* Second Section  */}
        <div className="w-1/2 p-10">
          <p>
            Be the first to receive the latest news on our brand, products and
            upcoming events.
          </p>
        </div>
        {/* Third Section  */}
        <div className="p-10">
          <button className="bg-black text-white px-8 py-4 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
