'use client';
import Image from "next/image";
import React, { useState } from "react";
import { Playwrite_IN } from "next/font/google";

const playwright = Playwrite_IN({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
});

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header
      id="navbar"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-4 duration-500 backdrop-blur-lg"
    >
      {/* Logo */}
      <h1
        className={`relative text-2xl capitalize font-signature text-accent group top-1 ${playwright.className}`}
      >
        <a className="block" href="/#hero">
          Usman
          <div className="absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></div>
        </a>
      </h1>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden w-7 h-7 transition focus:outline-none"
        onClick={() => setOpen(!isOpen)}
      >
        <Image
          height={30}
          width={30}
          src={isOpen ? '/close.png' : '/menu.png'}
          alt="Menu Icon"
        />
      </button>

      {/* Navbar Menu */}
      <nav
        className={`absolute top-full left-0 z-40 w-full p-6 bg-black backdrop-blur-md rounded-xl shadow-xl duration-200 transform ${
          isOpen ? 'block' : 'hidden'
        } md:static md:block md:w-auto md:bg-transparent md:shadow-none md:backdrop-blur-none`}
      >
        <ul className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          <li className="group">
            <a
              href="/#about"
              className="block p-2 duration-500 hover:text-accent"
            >
              <span className="relative w-fit">
                about
                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></span>
              </span>
            </a>
          </li>
          <li className="group">
            <a
              href="/#skills"
              className="block p-2 duration-500 hover:text-accent"
            >
              <span className="relative w-fit">
                skills
                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></span>
              </span>
            </a>
          </li>
          <li className="group">
            <a
              href="/#experience"
              className="block p-2 duration-500 hover:text-accent"
            >
              <span className="relative w-fit">
                experience
                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></span>
              </span>
            </a>
          </li>
          <li className="group">
            <a
              href="/#projects"
              className="block p-2 duration-500 hover:text-accent"
            >
              <span className="relative w-fit">
                projects
                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></span>
              </span>
            </a>
          </li>
          <li className="group">
            <a
              href="/#contact"
              className="block p-2 duration-500 hover:text-accent"
            >
              <span className="relative w-fit">
                contact
                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"></span>
              </span>
            </a>
          </li>
          <li>
            <a
              className="block p-2 px-4 text-sm border-[1.5px] font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150"
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/muhammad-usman-b32723228"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
