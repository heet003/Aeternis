/* eslint-disable */
import React from "react";
import {
  instagram,
  facebook,
  twitter,
  linkedin,
  youtube,
  tiktok,
  pinterest,
} from "../assets";
import { fadeIn } from "../utils/motion";

const MenuDropDown = () => {
  const year = new Date().getFullYear();

  const stories = [
    {
      img: "https://i.pinimg.com/736x/d0/b5/ae/d0b5ae4a2e7a351e107f79573a0cea2e.jpg",
      title: "2025 greetings from Le Brassus: 150 years in the making",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nkHQeoNbUf_gPWoL4xEPD3Zq7xamB2--rQ&s",
      title: "AP TALKS with Austen Chu: Complications",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2kN2XCS2So0A6U9mqrx4ARJB3N929krqog&s",
      title: "Natasha Tontey: 'Primate Visions: Macaque Macabre'",
    },
    {
      img: "https://drivar.de/wp-6401f-content/uploads/2023/11/Mclaren-rennstrecken-training-1-700x400.jpg",
      title:
        "Petrit Halilaj & Álvaro Urbano: 'Lunar Ensemble for Uprising Seas' (2023)",
    },
  ];

  const menuLinks = [
    {
      category: "Watches",
      links: [
        "All Watches",
        "Our Collections",
        "New Releases",
        "Exceptional Timepieces",
      ],
    },
    {
      category: "Our World",
      links: [
        "Born in Le Brassus",
        "Savoir-Faire",
        "AP x Art",
        "AP x Music",
        "Foundation",
        "Musée",
        "Atelier",
      ],
    },
    {
      category: "Stories",
      links: ["All News"],
    },
    {
      category: "Services",
      links: [
        "Hi-Care Programme",
        "Maintenance Services",
        "Where to Service",
        "Extend your Warranty",
        "AP Coverage Service",
        "Repair pick up",
      ],
    },
    {
      category: "Boutiques",
      links: ["Find a boutique"],
    },
  ];

  return (
    <div className="p-28 pt-48 overflow-x-hidden bg-white text-black h-screen">
      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Sidebar */}
        <div className="lg:w-1/5">
          {menuLinks.map((menu, index) => (
            <div key={index} className="mb-8">
              <h1 className="text-gray-500 text-xl mb-4">{menu.category}</h1>
              <ul className="space-y-2">
                {menu.links.map((link, i) => (
                  <li
                    key={i}
                    className="text-black hover:text-gray-400 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stories Section */}
        <div className="lg:w-4/5">
          <h1 className="text-6xl font-light mb-10">
            Latest <br />
            <span className="italic">Stories</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-auto object-cover rounded-md"
                />
                <h2 className="mt-4 text-lg font-medium">{story.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="py-4">
        <div className="mx-auto flex justify-between items-center">
          <div className="flex space-x-4 w-1/2">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={instagram} alt="" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={facebook} alt="" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={twitter} alt="" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={tiktok} alt="" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={pinterest} alt="" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={youtube} alt="" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={linkedin} alt="" />
            </a>
          </div>

          <div className="w-1/2">
            <p className="text-lg text-gray-500">&copy; {year} Hublot</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuDropDown;
