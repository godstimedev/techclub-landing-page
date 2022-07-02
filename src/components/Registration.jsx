import React from "react";

function Registration() {
  return (
    <div className="h-screen w-full p-[4rem]">
      <h1 className="text-center text-3xl font-bold mb-5">Register Now!</h1>
      <div className="  max-w-[960px] mx-auto">
        <form className="max-w-[480px] mx-auto p-[4rem] text-[#333] flex flex-col">
          <label className="">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            className="my-2 px-3 w-auto h-[5vh] border-solid border-[#333] "
          />
          <label className="mt-2">Email:</label>
          <input
            className=" my-2 px-3 w-auto h-[5vh] border-solid border-[#333] "
            type="email"
            placeholder="Your Email"
          />
          <label className="mt-2">Phone Number:</label>
          <input
            className=" my-2 px-3 w-auto h-[5vh] border-solid border-[#333] "
            type="tel"
            placeholder="Your Phone Number"
          />
          <button className="my-3 px-2 bg-[#78B8A4] py-2 rounded-md text-[#fff]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
