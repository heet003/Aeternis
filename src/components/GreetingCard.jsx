/*eslint-disable */
import React from "react";
import { greeting } from "../assets";
const GreetingCard = () => {
  return (
    <div className="bg-black text-white p-20 space-y-8 w-full">
      {/* Text Section */}
      <div className="space-y-8">
        <h1
          className="text-5xl
        lightHeading tracking-tighter uppercase font-extralight"
        >
          2025 Greetings <br />
          <span className="timesfonts italic">From Le Brassus</span>
        </h1>
        <div className="px-28 space-y-8 font-extralight">
          <p className="text-lg">
            This year, our team let their imaginations run wild for our upcoming
            150 years celebration and let's just say, things got creative!
          </p>
          <a href="#" className="text-sm tracking-wider discover-more ">
            Discover more
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-2 gap-4 px-36">
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-[25rem] h-[30rem] rounded-lg"
          >
            <source src={greeting} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5814085/pexels-photo-5814085.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Celebration Moment"
            className="w-[25rem] h-[30rem] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
