/*eslint-disable */
import React from "react";
import { hublotWatch } from "../assets";

const HublotWatch = () => {
  return (
    <div className="bg-black py-40 text-white p-20 space-y-8 w-full">
      {/* Text Section */}
      <div className="space-y-8">
        <h1 className="text-5xl lightHeading tracking-tighter uppercase font-extralight">
          Square Bang
          <br />
          <span className="timesfonts italic">Unico Ceramic Magic Gold</span>
        </h1>
        <div className="px-28 space-y-8 font-extralight">
          <p className="text-lg">
            The new 42 mm Unico Split-Seconds Chronograph GMT Large Date model
            premiers the use of an innovative coloured Ceramic Gold.
          </p>
          <a href="#" className="text-sm tracking-wider discover-more ">
            Discover more
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4 px-36">
        <div>
          <img
            src="https://cdn.thewatchpages.com/app/uploads/2024/04/23015435/hublot-square-big-bang-unico-magic-gold-821mx0130rx-4.jpeg"
            alt="Celebration Moment"
            className="w-[25rem] h-[30rem]"
          />
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default HublotWatch;
