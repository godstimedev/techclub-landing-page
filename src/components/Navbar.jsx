import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full  shadow-md">
      <nav className="max-w-[1240px] mx-auto h-24 px-4 flex justify-between items-center">
        <h1 className="text-4xl text-[#78B8A4]">Tech Club</h1>
        <ul className="md:flex hidden">
          <li className="text-[#333] px-3">Home</li>
          <li className="text-[#333] px-3">Course</li>
          <li className="text-[#333] px-3">About Us</li>
          <li className="text-[#333] px-3">Contact</li>
        </ul>
        <ul className=" hidden md:flex md:items-center">
          <button className="px-2 bg-[#78B8A4] py-2 rounded-md text-[#fff]">
            Register Now
          </button>
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
            <button className="px-2 my-3 bg-[#333] py-2 rounded-md text-[#fff]">
              Register Now
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
