import React from "react";
import { FaHtml5, FaCss3Alt, FaPaintBrush, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiDevices } from "react-icons/bi";

function Learn() {
  return (
    <div className="w-full min-h-screen bg-[#78B8A4] py-[4rem] p-4 border-b border-gray-500">
      <div
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/weathered-gray-concrete-wall-textured-background_53876-102639.jpg?t=st=1656965231~exp=1656965831~hmac=1c2b9e1f255013c30eeba7f01db560d15ab59fd979d50201c6fb29da3d4757ca&w=826")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // maxHeight: "100%",
        }}
        className=" max-w-[1064px] max-h-[100%] mx-auto  rounded-md px-2 md:px-[3rem] py-[4rem] mt-4"
      >
        <h3 className="text-3xl font-bold py-3 text-center">
          What You'll Learn
        </h3>
        <div className="grid place-items-center md:grid-cols-3 gap-[2rem] py-4 text-[#333]">
          <div
            data-aos="fade-down-right"
            className="shadow-lg rounded-2xl w-64 h-60 justify-center py-auto p-4 bg-white flex flex-col  items-center text-center"
          >
            <FaHtml5 size={40} className="text-[#78B8A4] inline-block" />
            <div className="w-[85%] pt-2 px-2">
              <h4 className="text-xl font-semibold">HTML</h4>
              <p>Learn the basic building blocks that go into every website.</p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="shadow-lg rounded-2xl w-64 h-60 justify-center p-4 bg-white flex flex-col items-center text-center"
          >
            <FaCss3Alt size={40} className="text-[#78B8A4] inline-block" />
            <div className="w-[85%] pt-2 px-2">
              <h4 className="text-xl font-semibold">CSS Essentials</h4>
              <p>Learn about the basic styling of every website.</p>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            className="shadow-lg rounded-2xl w-64 h-60 justify-center p-4 bg-white flex flex-col items-center text-center"
          >
            <SiJavascript size={40} className="text-[#78B8A4] inline-block" />
            <div className="w-[85%] pt-2 px-2">
              <h4 className="text-xl font-semibold">JAVASCRIPT</h4>
              <p>
                Learn the basics of the web's most popular programming language
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up-right"
            className="shadow-lg rounded-2xl w-64 h-60 justify-center p-4 bg-white flex flex-col items-center text-center"
          >
            <BiDevices size={40} className="text-[#78B8A4] inline-block" />
            <div className="w-[85%] pt-2 px-2">
              <h4 className="text-xl font-semibold">RESPONSIVE WEB DESIGN</h4>
              <p>
                Deliver digital experiences that are accessible across all
                devices.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="shadow-lg rounded-2xl w-64 h-60 justify-center p-4 bg-white flex flex-col items-center text-center"
          >
            <FaPaintBrush size={35} className="text-[#78B8A4] inline-block" />
            <div className="w-[85%] pt-2 px-2">
              <h4 className="text-xl font-semibold">CSS FRAMEWORKS</h4>
              <p>Learn the basic building blocks that go into every website.</p>
            </div>
          </div>
          <div
            data-aos="fade-up-left"
            className="shadow-lg rounded-2xl w-64 h-60 justify-center p-4 bg-white flex flex-col items-center text-center"
          >
            <FaReact size={40} className="text-[#78B8A4] inline-block" />
            <div className="w-[85%] pt-2 px-2">
              <h4 className="text-xl font-semibold">REACT JS</h4>
              <p>Learn the basic building blocks that go into every website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
