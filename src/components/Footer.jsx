/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import {
  instagram,
  facebook,
  twitter,
  linkedin,
  youtube,
  tiktok,
  pinterest,
} from "../assets";
import { fadeInOpacity, fadeIn } from "../utils/motion";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      variants={fadeIn("left", "tween", 0.5, 0.3)}
      initial="hidden"
      whileInView="show"
      className="bg-[#0C3428] text-white py-10 px-8 overflow-x-hidden"
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Logos Section */}
        <div className="flex flex-col lg:flex-row mx-auto items-center gap-6">
          <p className="text-xl font-light italic">Hublot CHRONICLES</p>
          <svg
            width="70px"
            height="70px"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--noto"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M109.48 16.34H84.84c-1.28 0-2.33 1.04-2.33 2.33v36.27H45.5V18.68c0-1.29-1.04-2.33-2.34-2.33H18.53a2.34 2.34 0 0 0-2.34 2.33v99.96c0 1.29 1.05 2.33 2.34 2.33h24.63a2.34 2.34 0 0 0 2.34-2.33V76.15h37.02v42.48c0 1.29 1.05 2.33 2.33 2.33h24.64c1.29 0 2.33-1.05 2.33-2.33V18.68a2.35 2.35 0 0 0-2.34-2.34z"
              fill="#ffffff"
            ></path>
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
            <li>All Watches</li>
            <li>Our Collections</li>
            <li>New Releases</li>
            <li>Find a Boutique</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase text-sm font-semibold">Our World</h3>
          <ul className="mt-2 space-y-1 text-sm lightHeading">
            <li>Born in Le Brassus</li>
            <li>Musée Atelier</li>
            <li>Hublot Chronicles</li>
            <li>Stay connected</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase text-sm font-semibold">Services</h3>
          <ul className="mt-2 space-y-1 text-sm lightHeading">
            <li>Maintenance Services</li>
            <li>Extend your warranty</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase text-sm font-semibold">Company</h3>
          <ul className="mt-2 space-y-1 text-sm lightHeading">
            <li>Careers</li>
            <li>Press</li>
            <li>Foundation</li>
            <li>Commitments</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="#" className="">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#" className="">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#" className="">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#" className="">
            <img src={tiktok} alt="tiktok" />
          </a>
          <a href="#" className="">
            <img src={pinterest} alt="pinterest" />
          </a>
          <a href="#" className="">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="#" className="">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col lg:flex-row gap-4 text-sm">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Accessibility</a>
        </div>

        {/* Copyright */}
        <p className="text-sm">© {year} HUBLOT</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
