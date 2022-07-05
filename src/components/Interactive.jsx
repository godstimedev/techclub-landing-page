import React from "react";

function Interactive() {
  return (
    <div className="min-h-[70vh] w-full bg-gradient-to-b from-[#78B8A4] to-white pt-[3rem]   border-b border-gray-500">
      <div className="max-w-[90%]  md:max-w-[1024px] mx-auto">
        <h1 className="text-center text-3xl font-bold mb-[2.5rem] text-[]">
          Interactive Hands-on Learning
        </h1>
        <iframe
          width="100%"
          height="300"
          src="//jsfiddle.net/Sunshine_sunny/8pxvb0yo/1/embedded/html,css,result/dark/"
          allowfullscreen="allowfullscreen"
          allowpaymentrequest
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Interactive;
