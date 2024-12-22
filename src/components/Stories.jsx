/*eslint-disable */
import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { newsData } from "../utils/data";

function Stories() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter news based on selected category
  const filteredNews =
    selectedCategory === "All"
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="p-8 bg-white text-black w-full overflow-x-hidden h-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl lightHeading text-center sm:text-left">
        LATEST
        <span className="italic timesfonts text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl block sm:inline">
          STORIES
        </span>
      </h1>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center sm:justify-start my-5 space-x-2 sm:space-x-4 border-b border-gray-300">
        {["All", "News", "Savoir-Faire", "Art", "Music"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`pb-2 ${
              selectedCategory === category
                ? "border-b-2 border-black font-bold"
                : "text-gray-600"
            } hover:text-black transition`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNews.map((news) => (
          <NewsCard
            key={news.id}
            category={news.category}
            image={news.image}
            title={news.title}
            description={news.description}
          />
        ))}
      </div>

      <div className="my-20">
        <button className="text-black py-2 px-6 border-black border-2 transition duration-500 hover:bg-black hover:text-white ">
          Load more Stories+
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-baseline gap-0 lg:gap-8">
        {/* First Section  */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 p-10">
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-5xl lightHeading">
            Get the
          </p>
          <p className="italic timesfonts text-5xl sm:text-6xl md:text-7xl lg:text-5xl">
            Latest News
          </p>
        </div>
        {/* Second Section  */}
        <div className="lg:w-1/2 sm:w-1/2 w-full p-10">
          <p className=" font-extralight text-lg sm:text-[1.2rem] md:text-[1.3rem] lg:text-xl xl:text-xl tracking-tight">
            Be the first to receive the latest news on our brand, products and
            upcoming events.
          </p>
        </div>
        {/* Third Section  */}
        <div className="p-10">
          <button className="bg-black text-white px-8 py-4 text-md sm:text-lg xl:text-lg rounded-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stories;
