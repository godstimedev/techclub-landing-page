import React from 'react';
// import Interactive from './Interactive';
import Learn from './Learn';
import Testimonial from './Testimonial';
import Cta from './Cta';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Illustration from '../assets/illustration.svg';

function Hero() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url("https://img.freepik.com/free-vector/digital-technology-background-with-hexagon-frame-white-tone_53876-117507.jpg?t=st=1656965231~exp=1656965831~hmac=8b91ce57c5522c41c53523f331c9cbe862779c345a4d8769a9c0fcfd7eae16e2&w=826")`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					// backgroundAttachment: "fixed",
				}}
				className="w-full  min-h-[calc(100vh-6rem)] grid gap-[2rem] md:gap-0 grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2  py-6"
			>
				<div
					data-aos="fade-up"
					className="max-w-[320px] pt-[2rem] md:pt-0 md:max-w-[480px] mx-auto flex flex-col md:justify-center text-center"
				>
					<h1 className="text-3xl md:text-4xl text-[#78B8A4] font-bold mb-[1rem]">
						START YOUR CODING JOURNEY TODAY{' '}
						<span className="text-[#f2db77] ">FOR FREE!!</span>
					</h1>
					<h3 className="text-lg font-medium text-[#78B8A4]">
						GAIN THE SKILLS, KNOWLEDGE AND EXPERIENCE YOU NEED TO GET AHEAD OF
						THE CURVE!
					</h3>
					<Link to="registration">
						<motion.button className=" mt-[1rem] py-4 px-6  bg-[#78B8A4] hover:opacity-80 focus:ring-[#333] focus:ring-offset-[#78B8A4] text-[#fff] w-[50%] md:w-[15vw] mx-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
							Get Started
						</motion.button>
					</Link>
				</div>
				<div
					data-aos="fade-down"
					// style={{
					//   backgroundImage: `url("https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1656877266~exp=1656877866~hmac=4b2dcbc5bc45899fe0bd561ad29a6f444628ded32c012d35174331bc59d652cc")`,
					//   backgroundPosition: "center",
					//   backgroundRepeat: "no-repeat",
					//   backgroundSize: "100%",
					// }}
					className=" w-[80%]  my-auto mx-auto"
				>
					<img src={Illustration} alt="/" />
				</div>
			</div>
			<Learn />
			{/* <Interactive /> */}
			<Testimonial />
			<Cta />
		</>
	);
}

export default Hero;
