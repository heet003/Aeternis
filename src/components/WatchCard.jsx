/* eslint-disable */
import React from "react";

const WatchCard = ({ image, modelNumber, title, description, details }) => {
  return (
    <div className="custom-watch-card border rounded-md shadow-lg p-4 text-center cursor-pointer transition-all duration-300">
      <img
        src={image}
        alt={title}
        className="custom-watch-card-image w-full h-48 object-contain mb-4 transition-transform duration-300"
      />
      <p className="custom-watch-model text-sm text-gray-500 mb-2">
        {modelNumber}
      </p>
      <h2 className="custom-watch-title text-lg font-semibold">{title}</h2>
      <p className="custom-watch-description text-sm text-gray-600 italic mb-2">
        {description}
      </p>
      <p className="custom-watch-details text-sm text-gray-500">{details}</p>
    </div>
  );
};

export default WatchCard;
