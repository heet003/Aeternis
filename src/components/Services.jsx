/*eslint-disable */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { right, left } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Services = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-[10px] top-1/2 transform -translate-y-1/2 z-10 rounded-full translucent p-5 shadow-md hover:bg-gray-500"
      >
        <img src={right} />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`absolute left-[10px] top-1/2 transform -translate-y-1/2 z-10 rounded-full p-5 shadow-md hover:bg-gray-500 translucent ${
          showLeftArrow ? "block" : "hidden"
        }`}
      >
        <img src={left} />
      </button>
    );
  };

  const images = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDW_XJ1-pQd0Ym65-7oO7Qdm-RtEjS3eu3_Q&s",
      name: "Hi-Care Programme",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFitS6dugoPnAjajc_djRW1K3440pvP-CjQ&s",
      name: "Maintenance Services",
    },
    {
      url: "https://www.watchtime.com/wp-content/uploads/2018/03/l_big-bang-unico-red-magic-3.jpg",
      name: "Caring for your watch",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQC4PwOQ0BZgZ28Pqm1c_yQxMDkA_nweL1A&s",
      name: "After Sales Network",
    },
  ];

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    beforeChange: (current, next) => {
      if (next > current) {
        setShowLeftArrow(true);
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="p-28 pt-20 z-10"></div>
      <motion.p
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        className="text-6xl font-extralight text-center w-1/3 ml-60"
      >
        OUR <span className="italic collection">SERVICES</span>
      </motion.p>
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="lg:w-1/5 pl-10"
        >
          {/* Left Sidebar */}
          <div className="flex flex-col space-y-2 text-black">
            <a
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Hi-Care Programme
            </a>
            <a
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Maintenance Services
            </a>
            <a
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Where to service
            </a>
            <a
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Extend your Warranty
            </a>
            <a
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              AP Coverage Service
            </a>
            <a
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Repair pick up
            </a>
          </div>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          className="lg:w-4/5 p-2"
        >
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="world-card">
                {/* Image */}
                <img
                  src={img.url}
                  alt={`Watch ${index + 1}`}
                  className="world-image"
                />
                <div className="world-name">{img.name}</div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </>
  );
};

export default Services;
