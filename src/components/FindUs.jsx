/* eslint-disable */
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const FindUs = () => {
  return (
    <div className="bg-white text-black w-full min-h-screen flex flex-col-reverse md:flex-row lg:px-16 xl:px-32 -z-20">
      {/* Header Section */}
      <div className="py-10 px-4 md:w-1/2 md:px-8 flex flex-col justify-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl
        lightHeading tracking-tighter uppercase font-extralight"
        >
          Where to <br />
          <span className="timesfonts italic uppercase">find us</span>
        </h1>
        <p className="mt-4 text-[0.8rem] md:text-md sm:text-sm lg:text-lg font-light">
          We invite you to visit our AP Houses and boutiques to explore a
          variety of Audemars Piguet timepieces and receive expert watch
          servicing from our skilled professionals either by appointment or
          walk-in.
        </p>
        <div className="mt-8">
          {/* Search Box */}
          <div className="flex flex-col items-start mb-6">
            <div className="flex items-center w-full border-b-2 border-slate-300 p-2">
              <input
                id="search"
                type="text"
                placeholder="Search for country, region, city..."
                className="flex-grow outline-none px-2"
              />
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Search
              </button>
            </div>
            <button className=" mt-2 underline">Use my current location</button>
          </div>

          {/* Store Count */}
          <div className="text-right flex justify-between">
            <span>1 store</span>
            <button className="ml-2 underline">Show All</button>
          </div>

          {/* Store Info */}
          <div className="border rounded-md shadow-lg p-4 mb-6">
            <h2 className="text-xl font-semibold">Kapoor Time Crafter</h2>
            <p className="text-gray-700 mt-2">Service Center</p>
            <p className="text-sm mt-2">
              D-15, South Extension II, Block D, 110049 New Delhi
            </p>
            <p className="text-sm mt-1">care@kapoorwatch.com</p>
            <p className="text-sm mt-1">+91 11 4134 9738</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-80 md:w-1/2 md:h-auto p-10">
        <MapContainer
          center={[28.5903831, 77.2243922]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; Heet Boda"
          />
          <Marker position={[28.5903831, 77.2243922]}>
            <Popup>
              Kapoor Time Crafter <br /> Service Center
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default FindUs;
