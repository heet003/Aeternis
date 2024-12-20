/*eslint-disable */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { right, left } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity } from "../utils/motion";

function Podcast() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const images = [
    {
      url: "https://aynnymcmgq.cloudimg.io/v7/image.ausha.co/ELAOYBkaPeQIDEqXkBJ4lTdAzmwRVoeY0duBDtQd_1400x1400.jpeg?t=1622127692&width=400",
      name: "Hublot Fusion Talks: The Art of Time",
      desc: "An exploration of how Hublot integrates innovation and artistry to redefine luxury watchmaking.",
      link: "/",
    },
    {
      url: "https://aynnymcmgq.cloudimg.io/v7/image.ausha.co/emV6DDM70qHsCDx6zYiLQPnOxlXWxidUsy9pE6cG_1400x1400.jpeg?t=1623776163&width=400",
      name: "Hublot Chronicles: Timeless Precision",
      desc: "Dive into the world of Hublot, where tradition meets modern craftsmanship to create iconic timepieces.",
      link: "/",
    },
    {
      url: "https://aynnymcmgq.cloudimg.io/v7/image.ausha.co/R3CbbP4oL7RRwEqLc7S57Gy17IiliqWZ8LCGnGfv_1400x1400.jpeg?t=1625748232&width=400",
      name: "Hublot Visionaries: Redefining Luxury",
      desc: "A podcast celebrating Hublot's groundbreaking designs and the visionaries behind them.",
      link: "/",
    },
  ];

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-[10px] top-1/2 transform -translate-y-1/2 z-10 rounded-full  p-5 shadow-md bg-[#5a5a5aa6]
        hover:bg-gray-500  "
      >
        <img src={right} />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`absolute left-[10px] top-1/2 transform -translate-y-1/2 z-10 rounded-full p-5 shadow-md hover:bg-gray-500  bg-[#5a5a5aa6] ${
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
    slidesToShow: 2,
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
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white pl-10 pt-20 pb-20 w-full min-h-screen">
      <div className="flex flex-col xl:flex-row items-start justify-between lg:gap-10">
        {/* Text Section */}
        <div className="flex-col space-y-10 xl:w-1/3 mb-8 lg:mb-0 text-left">
          <motion.h1
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-3xl lightHeading tracking-tighter md:text-5xl xl:text-[4rem]"
          >
            HUBLOT FUSION <span className="timesfonts italic">PODCAST</span>
          </motion.h1>
          <p
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            initial="hidden"
            whileInView="show"
            className="text-lg md:text-[1rem] px-2 pr-10"
          >
            Discover the third episode of the Fusion Podcast, a series of
            conversations presenting Hublot's craftsmanship, heritage
            and cultural universe through the eyes of Hublot's experts
            and special guests.
          </p>
        </div>

        {/* Image Slider */}
        <motion.div
          variants={fadeInOpacity(0.3, 0.5)}
          initial="hidden"
          whileInView="show"
          className="xl:w-2/3 w-full"
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="p-3 flex-col space-y-4">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-auto object-cover rounded-md"
                />
                <motion.p
                  variants={fadeIn("up", "tween", 0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="text-sm text-left font-medium"
                >
                  {image.name}
                </motion.p>
                <motion.p
                  variants={fadeIn("up", "tween", 0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="text-sm font-light"
                >
                  {image.desc}
                </motion.p>
                <a
                  variants={fadeIn("up", "tween", 0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  href={image.link}
                  className="discover-more text-lg md:text-sm"
                >
                  Discover More
                </a>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}

export default Podcast;
