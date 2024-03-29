import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="font bg-[#448370] color-[#fff]">
      <div className="max-w-screen-lg xl:max-w-screen-xl  mx-auto px-4 sm:px-6 md:px-8 text-[#333] ">
        <div className="container mx-auto py-5 ">
          <div className="xl:flex flex-wrap justify-center pt-6 pb-6 pl-3 sm:pl-0">
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 ">
              <ul className="xl:flex lg:flex md:flex sm:flex items-center justify-between text-center">
                <li className="text-white hover:text-[#333] text-base mb-4 sm:mb-0 ">
                  <Link
                    className="focus:outline-none focus:underline font-medium text-sm"
                    to="#"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="text-white hover:text-[#333] text-base mb-4 sm:mb-0">
                  <Link
                    className="focus:outline-none focus:underline font-medium text-sm"
                    to="#"
                  >
                    CURRICULUM
                  </Link>
                </li>
                <li className="text-white hover:text-[#333] text-base mb-4 sm:mb-0">
                  <Link
                    className="focus:outline-none focus:underline font-medium text-sm"
                    to="#"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="text-white hover:text-[#333] text-base mb-4 sm:mb-0">
                  <Link
                    className="focus:outline-none focus:underline font-medium text-sm"
                    to="/contact"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="  text-center  mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
            <p
              tabIndex="0"
              className="focus:outline-none text-white  dark:text-white font-semibold text-sm"
            >
              Powered by: RCCG TODP TECH CLUB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
