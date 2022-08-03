import { Link } from 'react-router-dom';

function Cta() {
	return (
		<div class=" w-full bg-[#fff] px-2 md:px-[4rem]  ">
			<section class="mx-auto container w-full py-36">
				<div class="flex flex-col justify-center items-center">
					<div
						data-aos="fade-in"
						className="md:grid md:items-center gap-4 place-items-center w-full mx-auto py-8 md:py-10 "
					>
						{' '}
						<h2 className="text-3xl font-extrabold text-[#000]  sm:text-4xl">
							<span className="block text-center">Gain Skills to enter</span>
							<span className="block text-center text-[#448370]">
								High-earning and Flexible Careers.
							</span>
						</h2>
						<p className="max-w-[560px] text-center text-[#333]">
							Register now to learn the skills you need to get started in your
							tech journey, All for free!!!
						</p>
					</div>

					<div className="mt-3 md:mt-0 inline-flex  rounded-md shadow">
						<Link to="registration">
							<button
								type="button"
								className="py-4 px-6  bg-[#448370] hover:opacity-90 focus:ring-[#333] focus:ring-offset-[#fff] text-[#fff] w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
							>
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Cta;
