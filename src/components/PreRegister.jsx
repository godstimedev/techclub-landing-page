import React from 'react';

function PreRegister() {
	return (
		<div className="min-h-[70vh] w-full bg-gradient-to-b from-[#f4f4f4] to-white pt-[3rem]   border-b border-gray-500">
			<div className="max-w-[100%]  md:max-w-[1024px] mx-auto">
				<h1 className="text-center text-3xl font-bold mb-[2.5rem] text-[]">
					Join our 2022 Tech Bootcamp!
				</h1>
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSels8cNG5s1TyDFrNmvuqBaa4cUUATLefahQRiXM95UOgadsQ/viewform?embedded=true"
					width="100%"
					height="2478"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
					title="Tech bootcamp registration form"
				>
					Loading…
				</iframe>
			</div>
		</div>
	);
}

export default PreRegister;
