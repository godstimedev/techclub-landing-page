import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { contactMessageUrl } from '../routes/api-routes';
import { Waveform } from '@uiball/loaders';
function Contact() {
	const [contactMessageDetails, setContactMessageDetails] = React.useState({
		name: '',
		email: '',
		message: '',
	});

	const [errors, setErrors] = React.useState({});
	const [loading, setLoading] = React.useState(false);

	const history = useNavigate();
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setContactMessageDetails({ ...contactMessageDetails, [name]: value });
	};
	const handleContactMessageRequest = async (e) => {
		setLoading(true);
		e.preventDefault();
		try {
			const { data } = await axios.post(
				contactMessageUrl,
				{ ...contactMessageDetails },
				{ headers: { Accept: 'application/json' } }
			);
			toast.success(data?.message);
			history('/');
			setLoading(false);
		} catch (error) {
			setLoading(false);

			setErrors(error?.response?.data?.errors);
			console.log(error);
		}
	};
	return (
		<form
			className="min-h-[calc(80vh-4rem)] flex items-center w-full space-x-3 p-4"
			onSubmit={handleContactMessageRequest}
		>
			<div
				data-aos="fade-up"
				className="w-full max-w-2xl px-[4rem] py-[4rem] m-auto my-4 md:my-[2rem] bg-[#78B8A4] rounded-lg shadow "
			>
				<div className="mb-8 text-3xl font-bold text-center text-[#333] ">
					Contact us !
				</div>
				<div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
					<div className="col-span-2 lg:col-span-1">
						<div className=" relative ">
							<input
								type="text"
								name="name"
								id="contact-form-name"
								className=" rounded-lg   flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none  "
								placeholder="Name"
								onChange={(event) => handleInputChange(event)}
							/>
							{errors?.name && (
								<span className=" text-[red] font-bold">{errors?.name}</span>
							)}
						</div>
					</div>
					<div className="col-span-2 lg:col-span-1">
						<div className=" relative ">
							<input
								name="email"
								type="text"
								id="contact-form-email"
								className=" rounded-lg   flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none  "
								placeholder="Email"
								onChange={(event) => handleInputChange(event)}
							/>
							{errors?.email && (
								<span className=" text-[red] font-bold">{errors?.email}</span>
							)}
						</div>
					</div>
					<div className="col-span-2">
						<label className="text-gray-700" for="message">
							<textarea
								className="flex-1 appearance-none    w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none  "
								id="message"
								placeholder="Enter your Message"
								name="message"
								rows="5"
								onChange={(event) => handleInputChange(event)}
								cols="40"
							></textarea>
						</label>
						{errors?.message && (
							<span className=" text-[red] font-bold">{errors?.message}</span>
						)}
					</div>
					<div className="col-span-2 text-right">
						<button
							type="submit"
							className={`py-2 px-4   ${
								loading ? 'bg-[#fff]' : 'bg-[#FFFBBD]'
							} hover:opacity-90   focus:ring-offset-[#333] text-[#333] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none   rounded-lg `}
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
								'Send Message'
							)}
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Contact;
