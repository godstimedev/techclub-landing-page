import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo-green.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full h-24 sticky shadow-md z-10">
      <nav className="max-w-[1240px] mx-auto h-[100%] px-4 flex justify-between items-center ">
        <Link to="/">
          <img src={Logo} alt="/" className="w-[60px] " />
        </Link>
        <ul className="md:flex hidden">
          <li className="text-[#333] font-medium px-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-[#333] font-medium px-3">
            <NavLink to="course">Course</NavLink>
          </li>
          <li className="text-[#333] font-medium px-3">
            <NavLink to="about">About Us</NavLink>
          </li>
          <li className="text-[#333] font-medium px-3">
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
        <ul className=" hidden md:flex md:items-center">
          <Link to="registration">
            <button className=" py-3 px-6  bg-[#78B8A4] hover:opacity-80 focus:ring-[#333] focus:ring-offset-[#78B8A4] text-[#fff] w-[10vw] mx-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
              Register
            </button>
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-[#78B8A4]" />
          ) : (
            <AiOutlineMenu size={30} className="text-[#78B8A4]" />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-[#78B8A4] py-3 text-[#333] absolute top-[96px] left-0 flex-col justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul className="">
            <li className="text-[#333] font-medium p-3">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-[#333] font-medium p-3">
              <NavLink to="course">Course</NavLink>
            </li>
            <li className="text-[#333] font-medium p-3">
              <NavLink to="about">About Us</NavLink>
            </li>
            <li className="text-[#333] font-medium p-3">
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
          <ul className="">
            <Link to="registration">
              <button className="py-3 px-6  bg-[#FFFBBD] hover:opacity-80 focus:ring-[#333] focus:ring-offset-[#333] text-[#333] w-[30%] mx-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                Register
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
