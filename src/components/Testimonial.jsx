import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Card = ({ img }) => {
  return (
    <div>
      <img
        src={img}
        alt="/"
        className="w-[100px] mx-auto my-3 h-[100px] rounded-[50%] border-2 border-[#F2DB77] p-2"
        imgProps={{ style: { borderRadius: "50%" } }}
      />
      <p className="px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        eveniet maxime optio sed! Sit quam odio distinctio atque commodi
        molestias!
      </p>
      <p className="py-2">
        <span className="text-[#F2DB77] font-bold italic">
          Godstime Agholor
        </span>
        , Web Developer
      </p>
    </div>
  );
};

function Testimonial() {
  return (
    <div className=" h-screen w-full p-4 md:p-[4rem] bg-[#78B8A4]">
      <h1 className="text-4xl font-bold text-[#333] text-center my-6">
        Testimonials
      </h1>
      <div className=" testimonial bg-white max-w-[100%] md:max-w-[60%] mx-auto text-center rounded-lg mt-[4rem] py-[3rem] px-8">
        <Slider
          prevArrow={<IoIosArrowBack />}
          nextArrow={<IoIosArrowForward />}
          dots
        >
          <Card img="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <Card img="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <Card img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
