/*eslint-disable */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { right, left } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity } from "../utils/motion";

function WatchShowcase() {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const images = [
    {
      url: "https://images.unsplash.com/photo-1689287428096-7e1dcc705a5c?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Royal Oak Concept Tourbillon “COMPANION” limited edition.",
      desc: 'The 43 mm titanium Royal Oak Concept Tourbillon "COMPANION" limited edition reinterprets Haute Horlogerie through the lens of artist KAWS.',
      link: "/",
    },
    {
      url: "https://images.unsplash.com/photo-1700471299386-7a84be5cd423?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chronext Precision Chronograph Limited Series",
      desc: "An innovative chronograph that pushes boundaries, designed for collectors seeking timeless precision and refined craftsmanship.",
      link: "/",
    },
    {
      url: "https://images.unsplash.com/photo-1725246164929-7e12379619be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kapoor Watch 821.OX Elite Collection",
      desc: "The Kapoor 821.OX introduces cutting-edge titanium construction paired with an elegant aesthetic, redefining luxury for true connoisseurs.",
      link: "/",
    },
    {
      url: "https://images.unsplash.com/photo-1666661827195-61a865184d03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Luxury Timepiece Noire Édition",
      desc: "The Noire Édition features a bold yet understated design, combining a dark aesthetic with meticulous Swiss watchmaking excellence.",
      link: "/",
    },
    {
      url: "https://images.unsplash.com/photo-1609335464321-0152690ff3dd?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kapoor Watch 821.NX Masterpiece Sapphire Edition",
      desc: "A harmonious blend of artistry and innovation, the 821.NX Masterpiece Sapphire Edition embodies the epitome of contemporary watch design.",
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
          dots: true,
          arrows: false,
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
    <div className="bg-black text-white px-2 sm:pl-10 w-full min-h-screen py-20">
      <div className="flex flex-col xl:flex-row items-start justify-between lg:gap-10">
        {/* Text Section */}
        <div className="flex-col space-y-10 xl:w-1/3 mb-8 lg:mb-0 text-left">
          <motion.h1
            variants={fadeIn("up", "tween", 0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            className="text-3xl lightHeading tracking-tighter md:text-5xl xl:text-[4rem] font-light"
          >
            OUR 2024 <span className="timesfonts italic">WATCHES</span>
          </motion.h1>
          <motion.a
            variants={fadeIn("up", "tween", 0.5, 0.8)}
            initial="hidden"
            whileInView="show"
            className="discover-more text-lg md:text-[1rem]"
          >
            Explore our latest.
          </motion.a>
        </div>

        {/* Image Slider */}
        <motion.div
          variants={fadeInOpacity(0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="xl:w-2/3 w-full"
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="pb-10 p-3 flex-col space-y-4">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-64 object-cover rounded-md"
                />
                <motion.p
                  variants={fadeIn("up", "tween", 0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="text-md sm:text-lg lg:text-xl font-semibold"
                >
                  {image.name}
                </motion.p>
                <motion.p
                  variants={fadeIn("up", "tween", 0.5, 0.5)}
                  initial="hidden"
                  whileInView="show"
                  className="text-sm sm:text-md lg:text-lg font-light"
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

export default WatchShowcase;
