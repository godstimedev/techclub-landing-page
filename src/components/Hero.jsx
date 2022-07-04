import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Hero() {
  return (
    <div className="w-full  min-h-[calc(100vh-6rem)] grid gap-[2rem] md:gap-0 grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 bg-white py-6">
      <div
        data-aos="fade-up"
        className="max-w-[320px] md:max-w-[480px] mx-auto flex flex-col md:justify-center text-center"
      >
        <h1 className="text-3xl md:text-4xl text-[#78B8A4] font-bold mb-[1rem]">
          START YOUR CODING JOURNEY TODAY{" "}
          <span className="text-[#F2DB77]">FOR FREE!!</span>
        </h1>
        <h3 className="text-lg font-medium text-[#78B8A4]">
          GAIN THE SKILLS, KNOWLEDGE AND EXPERIENCE YOU NEED TO GET AHEAD OF THE
          CURVE!
        </h3>
        <button className="w-[70%] md:w-[15vw] my-6 mx-auto px-2 bg-[#78B8A4] py-2 rounded-md text-[#fff]">
          Get Started
        </button>
      </div>
      <div
        data-aos="fade-down"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1656877266~exp=1656877866~hmac=4b2dcbc5bc45899fe0bd561ad29a6f444628ded32c012d35174331bc59d652cc")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        className=" w-[80%] h-[90%] my-auto mx-auto"
      ></div>
    </div>
  );
}

export default Hero;
