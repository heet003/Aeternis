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

  const filteredWatches = watchData.filter(
    (watch) =>
      watch.title.toLowerCase().includes(searchQuery) ||
      watch.brandName.toLowerCase().includes(searchQuery) // Filter by brand name too
  );

  // Group watches by brand
  const groupedWatches = watchData.reduce((groups, watch) => {
    if (!groups[watch.brandName]) groups[watch.brandName] = [];
    groups[watch.brandName].push(watch);
    return groups;
  }, {});

  // Filter watches within each group
  const filteredGroups = Object.keys(groupedWatches).reduce((result, brand) => {
    const filteredWatches = groupedWatches[brand].filter(
      (watch) =>
        watch.title.toLowerCase().includes(searchQuery) ||
        watch.brandName.toLowerCase().includes(searchQuery)
    );
    if (filteredWatches.length > 0) result[brand] = filteredWatches;
    return result;
  }, {});

  return (
    <div className="p-6 sm:px-10 lg:px-20 xl:px-32 bg-white text-black -z-20">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search for watches..."
          className="border-b-2 px-4 py-2 text-xl sm:text-2xl lg:text-3xl xl:text-[2.5rem] lightHeading w-full md:w-full mb-4 md:mb-0"
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

      {/* Watches Section by Brand */}
      {Object.keys(filteredGroups).map((brand) => (
        <div key={brand} className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {brand}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:gap-4 md:gap-2 sm:gap-1">
            {filteredGroups[brand].map((watch) => (
              <WatchCard
                key={watch.modelNumber}
                image={watch.image}
                modelNumber={watch.modelNumber}
                title={watch.title}
                description={watch.description}
                details={`${watch.brandName} - ${watch.details}`} // Display brand name
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
