import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaPaintBrush, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BiDevices } from "react-icons/bi";

function Learn() {
  return (
    <div className="w-full min-h-screen bg-[#78B8A4] p-4 border-b border-gray-500">
      <div className="bg-white max-w-[1064px] mx-auto  rounded-md px-2 md:px-[3rem] py-[4rem]">
        <h3 className="text-3xl py-3 text-center">What You'll Learn</h3>
        <div className="grid md:grid-cols-2 py-4 text-[#333]">
          <div className="md:max-w-[90%] py-4 flex gap-[1rem]">
            <AiFillHtml5 size={30} className="text-[#78B8A4] inline-block" />
            <div className="md:max-w-[80%]">
              <h4 className="text-xl font-semibold">HTML</h4>
              <p>Learn the basic building blocks that go into every website.</p>
            </div>
          </div>
          <div className="md:max-w-[90%] py-4 flex gap-[1rem]">
            <FaCss3Alt size={30} className="text-[#78B8A4] inline-block" />
            <div className="md:max-w-[80%]">
              <h4 className="text-xl font-semibold">CSS Essentials</h4>
              <p>Learn about the basic styling of every website.</p>
            </div>
          </div>
          <div className="md:max-w-[90%] py-4 flex gap-[1rem]">
            <SiJavascript size={30} className="text-[#78B8A4] inline-block" />
            <div className="md:max-w-[80%]">
              <h4 className="text-xl font-semibold">JAVASCRIPT</h4>
              <p>
                Learn the basics of the web's most popular programming language
              </p>
            </div>
          </div>
          <div className="md:max-w-[90%] py-4 flex gap-[1rem]">
            <BiDevices size={30} className="text-[#78B8A4] inline-block" />
            <div className="md:max-w-[80%]">
              <h4 className="text-xl font-semibold">
                RESPONSIVE WEB DEVELOPMENT
              </h4>
              <p>
                Design and deliver digital experiences that are accessible
                across all devices.
              </p>
            </div>
          </div>
          <div className="md:max-w-[90%] px-2 py-4 flex gap-[1rem]">
            <FaPaintBrush size={25} className="text-[#78B8A4] inline-block" />
            <div className="md:max-w-[80%]">
              <h4 className="text-xl font-semibold">CSS FRAMEWORKS</h4>
              <p>Learn the basic building blocks that go into every website.</p>
            </div>
          </div>
          <div className="md:max-w-[90%] px-2 py-4 flex gap-[1rem]">
            <FaReact size={30} className="text-[#78B8A4] inline-block" />
            <div className="md:max-w-[80%]">
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
