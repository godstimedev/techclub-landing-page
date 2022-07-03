import React from "react";

function Registration() {
  return (
    <div className="h-screen w-full py-6 px-2 md:p-[4rem]">
      <h1 className="text-center text-3xl font-bold mb-5">Register Now!</h1>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGFuZCUyMHBlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          borderRadius: "10px",
        }}
        className=" max-w-[960px] mx-auto"
      >
        <form className="max-w-[480px] mx-auto  p-[4rem] text-[#333] flex flex-col">
          <label className=" text-[#78b8a4] font-bold">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            className="my-2 px-3 w-auto h-[5vh] border-solid border-[#333] "
          />
          <label className="text-[#78b8a4] font-bold mt-2">Email:</label>
          <input
            className=" my-2 px-3 w-auto h-[5vh] border-solid border-[#333] "
            type="email"
            placeholder="Your Email"
          />
          <label className="text-[#78b8a4] font-bold mt-2">Phone Number:</label>
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
