/* eslint-disable */
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import WatchesDropDown from "./WatchesDropDown";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("text-white");
  const dropdownRef = useRef(null);

  const handleWatchesClick = () => {
    if (!isDropdownOpen) {
      // If opening the dropdown
      gsap.fromTo(
        dropdownRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      setIsDropdownOpen(true);
      setNavbarColor("text-black");
    } else {
      // If closing the dropdown
      gsap.fromTo(
        dropdownRef.current,
        { height: "auto", opacity: 1 },
        {
          height: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );
      setIsDropdownOpen(false);
      setNavbarColor("text-white");
    }
  };

  return (
    <>
      <div
        ref={dropdownRef}
        className={`absolute w-full bg-white text-black z-10 overflow-hidden ${
          isDropdownOpen ? "visible" : "invisible"
        }`}
        style={{ height: "0px" }}
      >
        <WatchesDropDown />
      </div>
      <nav
        className={`w-[90%] mx-auto flex items-center justify-between py-16 px-6 ${navbarColor} sticky z-20`}
      >
        <div className="flex items-center justify-center gap-6 text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class={`w-[40px] h-[40px] ${navbarColor} cursor-pointer`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
          <div className="flex items-center justify-center gap-14 text-lg font-medium">
            <a
              onClick={handleWatchesClick}
              className={`hover:text-gray-400 tracking-wider cursor-pointer ${
                isDropdownOpen && " underline"
              }`}
            >
              Watches
            </a>
            <a href="/" className="hover:text-gray-400 tracking-wider">
              Our World
            </a>
            <a href="/" className="hover:text-gray-400 tracking-wider">
              Shrefries
            </a>
          </div>
        </div>

        {/* Center - Navigation Links + Logo */}
        {/* <img src={logo} alt="logo" className="w-34" /> */}
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M109.48 16.34H84.84c-1.28 0-2.33 1.04-2.33 2.33v36.27H45.5V18.68c0-1.29-1.04-2.33-2.34-2.33H18.53a2.34 2.34 0 0 0-2.34 2.33v99.96c0 1.29 1.05 2.33 2.34 2.33h24.63a2.34 2.34 0 0 0 2.34-2.33V76.15h37.02v42.48c0 1.29 1.05 2.33 2.33 2.33h24.64c1.29 0 2.33-1.05 2.33-2.33V18.68a2.35 2.35 0 0 0-2.34-2.34z"
            fill={isDropdownOpen ? "#000000" : "#ffffff"}
          ></path>
        </svg>

        {/* Right Side - Icons */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-14">
            <a href="/" className="hover:text-gray-400 tracking-wider">
              Services
            </a>
            <a href="/" className="hover:text-gray-400 tracking-wider">
              Boutiques
            </a>
          </div>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke={isDropdownOpen ? "#000000" : "#ffffff"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9.5V12L14 13.5M7.93191 6.20428C8.54129 6 9.36367 6 10.8 6H13.2C14.6363 6 15.4587 6 16.0681 6.20429M7.93191 6.20428C7.82847 6.23896 7.73116 6.27953 7.63803 6.32698C7.07354 6.6146 6.6146 7.07354 6.32698 7.63803C6 8.27976 6 9.11984 6 10.8V13.2C6 14.8802 6 15.7202 6.32698 16.362C6.6146 16.9265 7.07354 17.3854 7.63803 17.673C7.73112 17.7205 7.82838 17.761 7.93178 17.7957M7.93191 6.20428L9.00003 3H15L16.0681 6.20429M16.0681 6.20429C16.1715 6.23897 16.2688 6.27953 16.362 6.32698C16.9265 6.6146 17.3854 7.07354 17.673 7.63803C18 8.27976 18 9.11984 18 10.8V13.2C18 14.8802 18 15.7202 17.673 16.362C17.3854 16.9265 16.9265 17.3854 16.362 17.673C16.2688 17.7205 16.1715 17.7611 16.068 17.7958M7.93178 17.7957C8.54116 18 9.36356 18 10.8 18H13.2C14.6362 18 15.4586 18 16.068 17.7958M7.93178 17.7957L8.9996 21H14.9996L16.068 17.7958"
              stroke={isDropdownOpen ? "#000000" : "#ffffff"}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="absolute top-16 left-0 w-full bg-black text-white p-4 sm:hidden">
            <Link to="/" className="block py-2">
              Watches
            </Link>
            <Link to="/" className="block py-2">
              Our World
            </Link>
            <Link to="/" className="block py-2">
              Stories
            </Link>
            <Link to="/" className="block py-2">
              Services
            </Link>
            <Link to="/" className="block py-2">
              Boutiques
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
