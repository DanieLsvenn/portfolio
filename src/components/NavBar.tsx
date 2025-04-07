"use client";

import Image from "next/image";
import { assets } from "../../assets/assets";
import { useEffect, useRef, useState } from "react";

interface NavBarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const NavBar = ({ isDarkMode, setIsDarkMode }: NavBarProps) => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header background color"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transform-gpu will-change-transform ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-black dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo assets"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="dark mode"
              className="w-6 cursor-pointer"
            />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border text-white border-white/50 rounded-full ml-4 font-ovo dark:border-white/50"
            href="#contact"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon_dark}
              alt="contact arrow icon"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu black"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile menu button */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-300 dark:bg-black dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a onClick={closeMenu} className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
