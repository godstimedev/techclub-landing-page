import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Cta() {
  return (
    <div className=" w-full bg-[#78b8a4] px-2 md:px-[4rem]  border-b border-gray-500">
      <div
        data-aos="fade-in"
        className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20"
      >
        <h2 className="text-3xl font-extrabold text-[#333]  sm:text-4xl">
          <span className="block">Want to be millionaire ?</span>
          <span className="block text-[#F2DB77]">It's today or never.</span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-2 md:mt-0 inline-flex rounded-md shadow">
            <button
              type="button"
              className="py-4 px-6  bg-[#F2DB77] hover:opacity-90 focus:ring-[#333] focus:ring-offset-[#fff] text-[#333] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
