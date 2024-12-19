/*eslint-disable */
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { right, left } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, fadeInOpacity } from "../utils/motion";

const OurWorld = () => {
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
      name: "Hublot Spider Look",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFitS6dugoPnAjajc_djRW1K3440pvP-CjQ&s",
      name: "Chronext Timepiece",
    },
    {
      url: "https://www.watchtime.com/wp-content/uploads/2018/03/l_big-bang-unico-red-magic-3.jpg",
      name: "Kapoor Watch 821.OX",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQC4PwOQ0BZgZ28Pqm1c_yQxMDkA_nweL1A&s",
      name: "Luxury Timepiece",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFpPLXvrz03W_4L0gI7SEPsbDQrSlxAIKFA&s",
      name: "Kapoor Watch 821.NX",
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
      <div className="p-28 pt-16 z-10"></div>
      <motion.p
        variants={fadeInOpacity(0.4, 1)}
        initial="hidden"
        whileInView="show"
        className="text-6xl font-extralight text-center w-1/3 ml-60"
      >
        WHO WE <span className="italic collection">ARE</span>
      </motion.p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/5 pl-10">
          {/* Left Sidebar */}
          <div className="flex flex-col space-y-2 text-black">
            <motion.a
              variants={fadeIn("up", "tween", 1, 0.2)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Born in Le Brassus
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 1, 0.3)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Savoir-Faire
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 1, 0.4)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              AP x Art
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 1, 0.5)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              AP x Music
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 1, 0.6)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Foundation
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 1, 0.7)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              Musée Atelier
            </motion.a>
            <motion.a
              variants={fadeIn("up", "tween", 1, 0.8)}
              initial="hidden"
              whileInView="show"
              to="/"
              className="hover:text-gray-400 tracking-wider cursor-pointer"
            >
              AP Chronicles
            </motion.a>
          </div>
        </div>

        {/* Image Slider */}
        <motion.div
          variants={fadeInOpacity(0.4, 1)}
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

export default OurWorld;
