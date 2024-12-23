/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import {
  instagramWhite,
  facebookWhite,
  twitterxWhite,
  linkedinWhite,
  youtubeWhite,
  tiktokWhite,
  pinterestWhite,
} from "../assets";
import { fadeInOpacity, fadeIn } from "../utils/motion";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      variants={fadeInOpacity(0.2, 0.4)}
      initial="hidden"
      whileInView="show"
      className="bg-[#0C3428] text-white py-10 px-8 w-full overflow-x-hidden"
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Logos Section */}
        <div className="flex flex-col lg:flex-row mx-auto items-center gap-6">
          <p className="text-xl font-light italic uppercase">
            Aeternis CHRONICLES
          </p>
          <svg height="50" width="200" xmlns="http://www.w3.org/2000/svg">
            <text
              x="10"
              y="40"
              fill="white"
              font-family="Arial, sans-serif"
              font-size="40"
              letter-spacing="2"
              text-shadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
            >
              Aeternis
            </text>
          </svg>

          <p className="text-xl font-light">FOUNDATIONS</p>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-8 text-center lg:text-center">
        {/* Column 1 - 4 */}
        <div>
          <h3 className="uppercase text-sm font-semibold">Watches</h3>
          <ul className="mt-2 space-y-1 text-sm lightHeading">
            <li className="cursor-pointer hover:text-slate-400">All Watches</li>
            <li className="cursor-pointer hover:text-slate-400">
              Our Collections
            </li>
            <li className="cursor-pointer hover:text-slate-400">
              New Releases
            </li>
            <li className="cursor-pointer hover:text-slate-400">
              Find a Boutique
            </li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase text-sm font-semibold">Our World</h3>
          <ul className="mt-2 space-y-1 text-sm lightHeading">
            <li className="cursor-pointer hover:text-slate-400">
              Born in Elegance
            </li>
            <li className="cursor-pointer hover:text-slate-400">
              Crafting the Future
            </li>
            <li className="cursor-pointer hover:text-slate-400">
              Aeternis Chronicles
            </li>
            <li className="cursor-pointer hover:text-slate-400">
              Stay connected
            </li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase text-sm font-semibold">Services</h3>
          <ul className="mt-2 space-y-1 text-sm lightHeading">
            <li className="cursor-pointer hover:text-slate-400">
              Maintenance Services
            </li>
            <li className="cursor-pointer hover:text-slate-400">
              Extend your warranty
            </li>
            <li className="cursor-pointer hover:text-slate-400">Contact us</li>
            <li className="cursor-pointer hover:text-slate-400">FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase text-sm font-semibold">Company</h3>
          <ul className="mt-2 space-y-1 text-sm lightHeading">
            <li className="cursor-pointer hover:text-slate-400">Careers</li>
            <li className="cursor-pointer hover:text-slate-400">Press</li>
            <li className="cursor-pointer hover:text-slate-400">Foundation</li>
            <li className="cursor-pointer hover:text-slate-400">Commitments</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="#" className="">
            <img src={instagramWhite} alt="instagram" className="" />
          </a>
          <a href="#" className="">
            <img src={facebookWhite} alt="facebook" className="" />
          </a>

          <a href="#" className="">
            <img src={twitterxWhite} alt="twitter" className="" />
          </a>
          <a href="#" className="">
            <img src={tiktokWhite} alt="tiktok" className="" />
          </a>
          <a href="#" className="">
            <img src={pinterestWhite} alt="pinterest" className="" />
          </a>
          <a href="#" className="">
            <img src={youtubeWhite} alt="youtube" className="" />
          </a>
          <a href="#" className="">
            <img src={linkedinWhite} alt="linkedin" className="" />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row gap-4 text-sm lightHeading">
          <a href="/" className="hover:text-slate-400 cursor-pointer">
            Terms of Use
          </a>
          <a href="/" className="hover:text-slate-400 cursor-pointer">
            Privacy Notice
          </a>
          <a href="/" className="hover:text-slate-400 cursor-pointer">
            Cookie Policy
          </a>
          <a href="/" className="hover:text-slate-400 cursor-pointer">
            Accessibility
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm lightHeading">
          © {year} Aeternis. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
