/* eslint-disable */
import React, { useState } from "react";
import WatchCard from "./WatchCard";
import { watchData } from "../utils/data";
import { filter, compare } from "../assets";

const Collection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredWatches = watchData.filter((watch) =>
    watch.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-6 px-40 bg-white text-black">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search for watches..."
          className="border-b-2 px-4 py-2 text-[2.5rem] lightHeading w-full md:w-full mb-4 md:mb-0"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="my-10 flex justify-between">
        <button className="bg-px-4 py-2 rounded-md text-xl">
          <img src={filter} className="w-6 h-6 inline" alt="filter" /> Filter
        </button>
        <button>
          <img src={compare} alt="compare" className="w-6 h-6" />
        </button>
      </div>
      {/* Watches Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 md:gap-2 sm:gap-1">
        {filteredWatches.map((watch) => (
          <WatchCard
            key={watch.modelNumber}
            image={watch.image}
            modelNumber={watch.modelNumber}
            title={watch.title}
            description={watch.description}
            details={watch.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
