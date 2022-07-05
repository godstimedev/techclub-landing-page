import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function Registration() {
  return (
    <div className="h-[calc(100vh-6rem)] w-full py-6 px-2 md:p-[4rem]">
      <h1 className="text-center text-3xl font-bold mb-5">Register Now!</h1>
      <div
        // style={{
        //   backgroundImage: `url("https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGFuZCUyMHBlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "100%",
        //   borderRadius: "10px",
        // }}
        data-aos="fade-up"
        className="bg-[#78b8a4] rounded-lg max-w-[960px] m-auto mt-4"
      >
        <form className="max-w-[480px] mx-auto  p-[4rem] text-[#333] flex flex-col">
          <label className=" text-[#fff] font-bold">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            className="my-2 py-2 px-3 w-auto h-[5vh] rounded-md border-solid border-[#333] outline-none focus:ring-2 focus:ring-[#333]"
          />
          <label className="text-[#fff] font-bold mt-2">Email:</label>
          <input
            className=" my-2 py-2 px-3 w-auto h-[5vh] rounded-md border-solid outline-none border-[#333] focus:ring-2 focus:ring-[#333]"
            type="email"
            placeholder="Your Email"
          />
          <label className="text-[#fff] font-bold mt-2">Phone Number:</label>
          <input
            className=" my-2 py-2 px-3 w-auto h-[5vh] rounded-md border-solid border-[#333] outline-none focus:ring-2 focus:ring-[#333]"
            type="tel"
            placeholder="Your Phone Number"
          />
          <button className="mt-3 px-2 bg-[#333] py-2 rounded-lg text-[#fff] hover:opacity-90 focus:ring-[#333] focus:ring-offset-[#333]  w-full transition ease-in duration-200 text-center text-base font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
