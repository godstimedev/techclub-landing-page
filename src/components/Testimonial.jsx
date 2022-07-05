import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Card = ({ img }) => {
  return (
    <div>
      <img
        src={img}
        alt="/"
        className="w-[100px] mx-auto my-3 h-[100px] rounded-[50%] border-2 border-[#F2DB77] p-2"
        imgProps={{ style: { borderRadius: "50%" } }}
      />
      <p className="px-4 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        eveniet maxime optio sed! Sit quam odio distinctio atque commodi
        molestias!
      </p>
      <p className="py-2 text-white">
        <span className="text-[#F2DB77] font-bold italic">
          Godstime Agholor
        </span>
        , Web Developer
      </p>
    </div>
  );
};

function Testimonial() {
  const settings = {
    dots: true,
    arrows: false,
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/gray-abstract-wireframe-technology-background_53876-101941.jpg?t=st=1656957507~exp=1656958107~hmac=aca311cef551b0232b1d57a771a788ecbc4da5d6f5da0c103e09914902f514ef&w=826")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" min-h-[70vh] w-full p-4 md:p-[4rem] "
    >
      <h1 className="text-4xl font-bold text-[#333] text-center">
        Testimonials
      </h1>
      <div
        data-aos="fade-in"
        className=" testimonial bg-[#78b8a4] max-w-[100%] md:max-w-[60%] mx-auto text-center rounded-lg mt-[3rem] py-[3rem] px-8"
      >
        <Slider {...settings}>
          <Card img="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <Card img="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <Card img="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
