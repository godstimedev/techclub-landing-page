import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaPaintBrush, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { BiDevices } from 'react-icons/bi';
// import background from "../assets/learn-bg.jpg";

function Learn() {
	return (
		<div className="w-full min-h-screen bg-[#FDFDFD]  p-4 ">
			<div
				// style={{
				//   backgroundImage: `url(https://media.istockphoto.com/vectors/seamless-dotted-copybook-sheet-vector-id937338082?k=20&m=937338082&s=612x612&w=0&h=NBbMlJm4ZmQLV0CJdQrUPOMIBuGj8E590AjUN3F_hsg=)`,
				//   backgroundPosition: "center",
				//   backgroundRepeat: "no-repeat",
				//   backgroundSize: "100% 100%",
				//   backgroundAttachment: "fixed",
				//   // maxHeight: "100%",
				// }}
				className="  max-w-[1064px] max-h-[100%] mx-auto  rounded-md px-2 md:px-[3rem] py-[4rem]"
			>
				<h3 className="text-3xl font-bold py-3 text-center">
					What You'll Learn
				</h3>
				<div className="grid place-items-center md:grid-cols-3 gap-[2rem] py-4 text-[#333]">
					<div
						data-aos="fade-down-right"
						className="shadow-lg rounded-2xl w-76 h-60 justify-center py-auto p-6 bg-white flex flex-col  items-center text-center"
					>
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
						>
							<FaHtml5 size={40} className="text-[#78B8A4] inline-block" />
						</motion.div>
						<div className="w-[85%] pt-2 px-2">
							<h4 className="text-xl font-semibold">HTML</h4>
							<p>Learn the basic building blocks that go into every website.</p>
						</div>
					</div>
					<div
						data-aos="fade-down"
						className="shadow-lg rounded-2xl w-76 h-60 justify-center p-6 bg-white flex flex-col items-center text-center"
					>
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
						>
							<FaCss3Alt size={40} className="text-[#78B8A4] inline-block" />
						</motion.div>
						<div className="w-[85%] pt-2 px-2">
							<h4 className="text-xl font-semibold">CSS Essentials</h4>
							<p>Learn about the basic styling of every website.</p>
						</div>
					</div>
					<div
						data-aos="fade-down-left"
						className="shadow-lg rounded-2xl w-76 h-60 justify-center p-6 bg-white flex flex-col items-center text-center"
					>
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
						>
							<SiJavascript size={40} className="text-[#78B8A4] inline-block" />
						</motion.div>
						<div className="w-[85%] pt-2 px-2">
							<h4 className="text-xl font-semibold">JAVASCRIPT</h4>
							<p>
								Learn the basics of the web's most popular programming language.
							</p>
						</div>
					</div>
					<div
						data-aos="fade-up-right"
						className="shadow-lg rounded-2xl w-76 h-60 justify-center p-6 bg-white flex flex-col items-center text-center"
					>
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
						>
							<BiDevices size={40} className="text-[#78B8A4] inline-block" />
						</motion.div>
						<div className="w-[85%] pt-2 px-2">
							<h4 className="text-xl font-semibold">RESPONSIVE WEB DESIGN</h4>
							<p>
								Deliver digital experiences that are accessible across all
								devices.
							</p>
						</div>
					</div>
					<div
						data-aos="fade-up"
						className="shadow-lg rounded-2xl w-76 h-60 justify-center p-6 bg-white flex flex-col items-center text-center"
					>
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
						>
							<FaPaintBrush size={35} className="text-[#78B8A4] inline-block" />
						</motion.div>
						<div className="w-[85%] pt-2 px-2">
							<h4 className="text-xl font-semibold">CSS FRAMEWORKS</h4>
							<p>
								Learn about libraries allowing for easier web styling using CSS.
							</p>
						</div>
					</div>
					<div
						data-aos="fade-up-left"
						className="shadow-lg rounded-2xl w-76 h-60 justify-center p-6 bg-white flex flex-col items-center text-center"
					>
						<motion.div
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
						>
							<FaReact size={40} className="text-[#78B8A4] inline-block" />
						</motion.div>
						<div className="w-[85%] pt-2 px-2">
							<h4 className="text-xl font-semibold">REACT JS</h4>
							<p>
								Learn about Javascript library used for building user
								interfaces.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Learn;
