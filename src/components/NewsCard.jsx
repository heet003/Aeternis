/*eslint-disable */
import React from "react";

function NewsCard({ image, title, description, category }) {
  return (
    <div className="flex flex-col space-y-4">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <h3 className="font-bold text-lg">{title}</h3>
      <span className="border-gray-400 border-2 w-fit py-[0.1rem] px-2 rounded-">
        {category}
      </span>
      <p className="text-gray-600">{description}</p>
      <a
        href="/"
        className="discover-more-black w-fit cursor-pointer text-xs sm:text-base md:text-sm lg:text-lg xl:text-[1rem]"
      >
        View story
      </a>
    </div>
  );
}

export default NewsCard;
