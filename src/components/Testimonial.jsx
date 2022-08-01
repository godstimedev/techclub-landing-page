import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const Card = ({ photo_url, title, name, content }) => {
	return (
		<div>
			<img
				src={photo_url}
				alt="/"
				className="w-[100px] mx-auto my-3 h-[100px] rounded-[50%] border-2 border-[#FFFBBD] p-2"
				// imgProps={{ style: { borderRadius: '50%' } }}
			/>
			<p className="px-4 text-white">{content}</p>
			<p className="py-2 text-white">
				<span className="text-[#FFFBBD] font-bold italic">{name}</span>, {title}
			</p>
		</div>
	);
};

function Testimonial() {
	useEffect(() => {
		getTestimonials();
	}, []);

	const [testimonials, setTestimonials] = useState([]);
	const getTestimonials = async () => {
		try {
			const { data } = await axios.get(
				'http://localhost:8001/api/testimonials'
			);
			setTestimonials(data?.data);
		} catch (error) {
			console.error(error);
		}
	};
	const settings = {
		dots: true,
		arrows: false,
	};
	return (
		<div
			style={{
				backgroundImage: `url("https://img.freepik.com/free-photo/gray-abstract-wireframe-technology-background_53876-101941.jpg?t=st=1656957507~exp=1656958107~hmac=aca311cef551b0232b1d57a771a788ecbc4da5d6f5da0c103e09914902f514ef&w=826")`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
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
					{testimonials?.map((testimonial, key) => (
						<Card {...testimonial} key={key} />
					))}
				</Slider>
			</div>
		</div>
	);
}

export default Testimonial;
