import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Footer() {
  return (
    <footer className="bg-[#78B8A4]  pt-4 pb-8 xl:pt-8">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-[#333] ">
        <ul
          data-aos="fade-up"
          className="text-lg font-light pb-4 flex flex-wrap justify-center"
        >
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-[#333] font-bold uppercase mb-4">
                Components
              </h2>
              <ul>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Elements
                  </a>
                </li>
                <li className="mb-2   transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Forms
                  </a>
                </li>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Commerces
                  </a>
                </li>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Navigation
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-[#333] font-bold uppercase mb-4">Contacts</h2>
              <ul>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Elements
                  </a>
                </li>
                <li className="mb-2   transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Forms
                  </a>
                </li>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Commerces
                  </a>
                </li>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Navigation
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-[#333] font-bold uppercase mb-4">
                Customization
              </h2>
              <ul>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Elements
                  </a>
                </li>
                <li className="mb-2   transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Forms
                  </a>
                </li>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Commerces
                  </a>
                </li>
                <li className="mb-2  transition-colors duration-200">
                  <a className="hover:text-[#fff]" href="#">
                    Navigation
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="text-center pt-10 sm:pt-12 font-medium text-white flex items-center justify-center">
          powered by: RCCG TODP TECH CLUB
        </div>
      </div>
    </footer>
  );
}

export default Footer;
