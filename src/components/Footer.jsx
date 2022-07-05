import React from "react";

function Footer() {
  return (
    <footer className=" bg-[#78B8A4]  pt-4 pb-8 ">
      <div className="max-w-screen-lg xl:max-w-screen-xl  mx-auto px-4 sm:px-6 md:px-8 text-[#333] my-[3rem]">
        <div class="max-w-screen-xl mx-auto px-4">
          <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li class="my-2">
              <a
                class="text-[#333] hover:text-[#fff] font-medium  transition-colors duration-200"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-[#333] hover:text-[#fff] font-medium  transition-colors duration-200"
                href="#"
              >
                CURRICULUM
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-[#333] hover:text-[#fff] font-medium  transition-colors duration-200"
                href="#"
              >
                ABOUT US
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-[#333] hover:text-[#fff] font-medium  transition-colors duration-200"
                href="#"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-medium text-white flex items-center justify-center">
          powered by: RCCG TODP TECH CLUB
        </div>
      </div>
    </footer>
  );
}

export default Footer;
