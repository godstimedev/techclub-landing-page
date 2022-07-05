import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full h-24 sticky shadow-md z-10">
      <nav className="max-w-[1240px] mx-auto h-[100%] px-4 flex justify-between items-center ">
        <h1 className="text-4xl text-[#78B8A4]">Tech Club</h1>
        <ul className="md:flex hidden">
          <li className="text-[#333] px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#333] px-3">
            <Link to="course">Course</Link>
          </li>
          <li className="text-[#333] px-3">
            <Link to="about">About Us</Link>
          </li>
          <li className="text-[#333] px-3">
            <Link to="contact">Contact</Link>
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
            <li className="text-[#333] p-3">Home</li>
            <li className="text-[#333] p-3">Course</li>
            <li className="text-[#333] p-3">About Us</li>
            <li className="text-[#333] p-3">Contact</li>
          </ul>
          <ul className="">
            <button className="py-3 px-6  bg-[#F2DB77] hover:opacity-80 focus:ring-[#333] focus:ring-offset-[#333] text-[#333] w-[30%] mx-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
              Register
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
