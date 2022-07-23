import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Registration() {
  return (
    <form className="h-[calc(100vh-6rem)] flex items-center w-full space-x-3 p-4">
      <div
        data-aos="fade-up"
        className="w-full max-w-2xl px-[4rem] py-[4rem] m-auto mt-4 md:mt-[3rem] bg-[#78B8A4] rounded-lg shadow "
      >
        <div className="mb-8 text-3xl font-bold text-center text-[#333] ">
          Register Now!
        </div>
        <div className="max-w-[480px] mx-auto  md:px-[4rem] text-[#333] flex flex-col">
          <label className=" text-[#fff] font-bold">Name:</label>
          <input
            type="text"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-[#333] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
            placeholder="Your Name"
          />
          <label className="text-[#fff] font-bold mt-2">Email:</label>
          <input
            type="email"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-[#333] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
            placeholder="Your email"
          />
          <label className="text-[#fff] font-bold mt-2">Phone Number:</label>
          <input
            type="tel"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-[#333] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
            placeholder="Your phone number"
          />
          <button className="mt-4 px-2 bg-[#333] py-2 rounded-lg text-[#fff] hover:opacity-90 focus:ring-[#333] focus:ring-offset-[#333]  w-full transition ease-in duration-200 text-center text-base font-semibold">
            Register
          </button>
        </div>
      </div>
    </form>
  );
}

export default Registration;
