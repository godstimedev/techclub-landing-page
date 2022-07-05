import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Cta() {
  return (
    <div className=" w-full bg-[#78b8a4] px-2 md:px-[4rem]  border-b border-gray-500">
      <div
        data-aos="fade-in"
        className="md:grid md:items-center gap-4 place-items-center w-full mx-auto py-8 md:py-10 "
      >
        <h2 className="text-3xl font-extrabold text-[#333]  sm:text-4xl">
          <span className="block text-center">Gain Skills to enter</span>
          <span className="block text-center text-[#F2DB77]">
            High-earning and Flexible Careers.
          </span>
        </h2>
        <div className="text-center">
          <div className="mt-3 md:mt-0 inline-flex  rounded-md shadow">
            <Link to="registration">
              <button
                type="button"
                className="py-4 px-6  bg-[#F2DB77] hover:opacity-90 focus:ring-[#333] focus:ring-offset-[#fff] text-[#333] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
