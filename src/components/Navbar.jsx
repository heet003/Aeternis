/* eslint-disable */
import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import WatchesDropDown from "./WatchesDropDown";
import MenuDropDown from "./menuDropDown";
import { clsx } from "clsx"; // Optional utility for class names

const Navbar = () => {
  const [isWatchesOpen, setIsWatchesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("text-white");
  const watchesRef = useRef(null);
  const menuRef = useRef(null);

  const toggleDropdown = (dropdownRef, isOpen, setOpenState) => {
    if (!isOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      setNavbarColor("text-black");
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      setNavbarColor("text-white");
    }
    setOpenState(!isOpen);
  };

  return (
    <>
      {/* Menu Dropdown */}
      <div
        ref={menuRef}
        className={clsx(
          "absolute w-full bg-white text-black z-10 overflow-hidden",
          isMenuOpen ? "visible" : "invisible"
        )}
        style={{ height: isMenuOpen ? "auto" : "0px" }}
      >
        <MenuDropDown />
      </div>

      {/* Watches Dropdown */}
      <div
        ref={watchesRef}
        className={clsx(
          "absolute w-full bg-white text-black z-10 overflow-hidden",
          isWatchesOpen ? "visible" : "invisible"
        )}
        style={{ height: isWatchesOpen ? "auto" : "0px" }}
      >
        <WatchesDropDown />
      </div>

      {/* Navigation Bar */}
      <nav
        className={clsx(
          "w-[90%] mx-auto flex items-center justify-between py-16 px-6 sticky z-20",
          navbarColor,
          isMenuOpen || isWatchesOpen ? "bg-white" : ""
        )}
      >
        {/* Left Section */}
        <div className="flex items-center gap-6 text-lg font-medium">
          <button
            onClick={() => toggleDropdown(menuRef, isMenuOpen, setIsMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className="text-white w-10 h-10" />
            ) : (
              <MenuIcon className="text-white w-10 h-10" />
            )}
          </button>
          <div className="flex gap-14">
            <a
              onClick={() =>
                toggleDropdown(watchesRef, isWatchesOpen, setIsWatchesOpen)
              }
              className={clsx(
                "hover:text-gray-400 cursor-pointer",
                isWatchesOpen && "underline"
              )}
            >
              Watches
            </a>
            <a href="/" className="hover:text-gray-400">
              Our World
            </a>
            <a href="/" className="hover:text-gray-400">
              Shrefries
            </a>
          </div>
        </div>

        {/* Logo */}
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          className="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M109.48 16.34H84.84c-1.28 0-2.33 1.04-2.33 2.33v36.27H45.5V18.68c0-1.29-1.04-2.33-2.34-2.33H18.53a2.34 2.34 0 0 0-2.34 2.33v99.96c0 1.29 1.05 2.33 2.34 2.33h24.63a2.34 2.34 0 0 0 2.34-2.33V76.15h37.02v42.48c0 1.29 1.05 2.33 2.33 2.33h24.64c1.29 0 2.33-1.05 2.33-2.33V18.68a2.35 2.35 0 0 0-2.34-2.34z"
            fill={isMenuOpen || isWatchesOpen ? "#000000" : "#ffffff"}
          ></path>
        </svg>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="flex gap-14">
            <a href="/" className="hover:text-gray-400">
              Services
            </a>
            <a href="/" className="hover:text-gray-400">
              Boutiques
            </a>
          </div>
          <UserIcon
            className={
              isMenuOpen || isWatchesOpen ? "text-black" : "text-white"
            }
          />
          <WatchIcon
            className={isMenuOpen || isWatchesOpen ? "#000000" : "#ffffff"}
          />
        </div>
      </nav>
    </>
  );
};

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
  >
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 50 50"
  >
    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WatchIcon = ({ className }) => (
  <svg
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 9.5V12L14 13.5M7.93191 6.20428C8.54129 6 9.36367 6 10.8 6H13.2C14.6363 6 15.4587 6 16.0681 6.20429M7.93191 6.20428C7.82847 6.23896 7.73116 6.27953 7.63803 6.32698C7.07354 6.6146 6.6146 7.07354 6.32698 7.63803C6 8.27976 6 9.11984 6 10.8V13.2C6 14.8802 6 15.7202 6.32698 16.362C6.6146 16.9265 7.07354 17.3854 7.63803 17.673C7.73112 17.7205 7.82838 17.761 7.93178 17.7957M7.93191 6.20428L9.00003 3H15L16.0681 6.20429M16.0681 6.20429C16.1715 6.23897 16.2688 6.27953 16.362 6.32698C16.9265 6.6146 17.3854 7.07354 17.673 7.63803C18 8.27976 18 9.11984 18 10.8V13.2C18 14.8802 18 15.7202 17.673 16.362C17.3854 16.9265 16.9265 17.3854 16.362 17.673C16.2688 17.7205 16.1715 17.7611 16.068 17.7958M7.93178 17.7957C8.54116 18 9.36356 18 10.8 18H13.2C14.6362 18 15.4586 18 16.068 17.7958M7.93178 17.7957L8.9996 21H14.9996L16.068 17.7958"
      stroke={className}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Navbar;
