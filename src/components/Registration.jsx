import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { registerUserUrl } from '../routes/api-routes';
// ..
import { Waveform } from '@uiball/loaders';

function Registration() {
	const history = useNavigate();
	const [userDetails, setUserDetails] = useState({
		name: '',
		email: '',
		phone_number: '',
	});

	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserDetails({ ...userDetails, [name]: value });
	};
	const handleSignup = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const { data } = await axios.post(
				registerUserUrl,
				{ ...userDetails },
				{ headers: { Accept: 'application/json' } }
			);
			toast.success(data?.message);
			setLoading(false);
			history('/');
		} catch (error) {
			setLoading(false);
			setErrors(error?.response?.data?.errors);
			console.log(error);
		}
	};
	return (
		<>
			<form
				className="min-h-[calc(80vh-4rem)] flex items-center w-full space-x-3 p-4"
				onSubmit={(e) => handleSignup(e)}
			>
				<div
					data-aos="fade-up"
					className="w-full max-w-2xl px-[4rem] py-[4rem] m-auto my-6 md:my-[2rem] bg-[#78B8A4] rounded-lg shadow "
				>
					<div className="mb-8 text-3xl font-bold text-center text-[#333] ">
						Register Now!
					</div>
					<div className="max-w-[480px] mx-auto  md:px-[4rem] text-[#333] flex flex-col">
						<label className=" text-[#fff] font-bold">Name:</label>
						<input
							name="name"
							onChange={(e) => handleInputChange(e)}
							type="text"
							className=" rounded-lg border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
							placeholder="Your Name"
						/>
						{errors?.name && (
							<span className=" text-[red] font-bold">{errors?.name}</span>
						)}
						<label className="text-[#fff] font-bold mt-2">Email:</label>
						<input
							name="email"
							onChange={(e) => handleInputChange(e)}
							type="email"
							className=" rounded-lg border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
							placeholder="Your email"
						/>
						{errors?.email && (
							<span className=" text-[red] font-bold">{errors?.email}</span>
						)}
						<label className="text-[#fff] font-bold mt-2">Phone Number:</label>
						<input
							name="phone_number"
							onChange={(e) => handleInputChange(e)}
							type="tel"
							className=" rounded-lg border-transparent flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none"
							placeholder="Your phone number"
						/>
						{errors?.phone_number && (
							<span className=" text-[red] font-bold">
								{errors?.phone_number}
							</span>
						)}
						<button
							className={`mt-4 px-2 ${
								loading ? 'bg-[#fff]' : 'bg-[#333]'
							} py-2 rounded-lg text-[#fff] hover:opacity-90 focus:ring-[#333] focus:ring-offset-[#333]  w-full transition ease-in duration-200 text-center text-base font-semibold`}
						>
							{loading ? (
								<div className="text-black text-center">
									<Waveform
										size={25}
										lineWeight={3.5}
										speed={1}
										color="black"
									/>
									{/* Please Wait */}
								</div>
							) : (
								'Register'
							)}
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default Registration;
