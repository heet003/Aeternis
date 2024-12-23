/*eslint-disable */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { right, left } from "../assets";
import { fadeIn, fadeInOpacity } from "../utils/motion";
import { motion } from "framer-motion";

const WatchesDropDown = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const images = [
    {
      url: "https://authenticfreak.com/wp-content/uploads/2022/11/hublot-spider-look-watch-570x570-1-600x600.jpg",
      name: "Hublot Spider Look",
    },
    {
      url: "https://chronexttime.imgix.net/V/6/V65928/V65928_1.png?w=570&ar=1:1&auto=format&fm=png&q=55&usm=50&usmrad=1.5&dpr=1&trim=color&fit=fill&auto=compress&bg=FFFFFF&bg-remove=false",
      name: "Chronext Timepiece",
    },
    {
      url: "https://ad.kapoorwatch.com/content/images/product/821.OX.0180.RX-400.webp",
      name: "Kapoor Watch 821.OX",
    },
    {
      url: "https://luxurytime.in/wp-content/uploads/2024/02/451.NX_.1170.NX_-600x600.webp",
      name: "Luxury Timepiece",
    },
    {
      url: "https://ad.kapoorwatch.com/content/images/product/821.NX.0170.RX-400.webp",
      name: "Kapoor Watch 821.NX",
    },
  ];

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

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 4,
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
      <div className="dropdown-watches p-10 pt-[9.5rem]"></div>
      <motion.h1
        variants={fadeInOpacity(0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="text-6xl xl:text-5xl lg:text-[2.5rem] font-extralight text-center w-1/3  ml-56"
      >
        Our <span className="italic collection">Collections</span>
      </motion.h1>
      <div className="flex flex-col lg:flex-row gap-10">
        <motion.div
          variants={fadeInOpacity(0.7, 1)}
          initial="hidden"
          whileInView="show"
          className="2xl:w-1/6 xl:w-1/6 lg:w-1/6 text-center"
        >
          <div className="flex flex-col gap-4 p-2 text-black">
            <motion.a
              variants={fadeIn("up", "tween", 0.7, 0.5)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              All Watches
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 0.7, 0.5)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Our Collections
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 0.7, 0.5)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              New Releases
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 0.7, 0.5)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Exceptional
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 0.7, 0.5)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Timepieces
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInOpacity(0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="2xl:w-5/6 xl:w-5/6 lg:w-5/6  p-2"
        >
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="watch-card">
                {/* Image */}
                <img
                  src={img.url}
                  alt={`Watch ${index + 1}`}
                  className="watch-image"
                />
                {/* Watch Name Overlay */}
                <div className="watch-name">{img.name}</div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </>
  );
};

export default WatchesDropDown;
