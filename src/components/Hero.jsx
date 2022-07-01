import React from "react";

function Hero() {
  return (
    <div className="w-full h-[calc(100vh-6rem)] grid place-items-center bg-[#78B8A4]">
      <div className="max-w-[320px] md:max-w-[580px] mx-auto  text-center">
        <h1 className="text-4xl text-white font-bold mb-[2rem]">
          START YOUR CODING JOURNEY TODAY{" "}
          <span className="text-[#F2DB77]">FOR FREE!!</span>
        </h1>
        <h3 className="text-xl text-white">
          GAIN THE SKILLS, KNOWLEDGE AND EXPERIENCE YOU NEED TO GET AHEAD OF THE
          CURVE!
        </h3>
      </div>
    </div>
  );
}

export default Hero;
