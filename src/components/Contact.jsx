import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Contact() {
  return (
    <form className="h-[calc(100vh-6rem)] flex items-center w-full space-x-3 p-4">
      <div
        data-aos="fade-up"
        className="w-full max-w-2xl px-[4rem] py-[4rem] m-auto mt-4 md:mt-[3rem] bg-[#78B8A4] rounded-lg shadow "
      >
        <div className="mb-8 text-3xl font-bold text-center text-[#333] ">
          Contact us !
        </div>
        <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                id="contact-form-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-[#333] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className=" relative ">
              <input
                type="text"
                id="contact-form-email"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-[#333] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
                placeholder="email"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="text-gray-700" for="name">
              <textarea
                className="flex-1 appearance-none border-transparent border border-[#333] w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#333] focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
              ></textarea>
            </label>
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              className="py-2 px-4  bg-[#FFFBBD] hover:opacity-90 focus:ring-[#333] focus:ring-offset-[#333] text-[#333] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;
