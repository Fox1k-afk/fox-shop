import React from 'react';
import loader from '../assets/svg/loader.svg';

const Loader = () => {
	return (
		<div className='h-full bg-black bg-opacity-50 z-[999999] flex justify-center items-center flex-col w-full absolute'>
			<div>
				<img src={loader} alt='loader' />
			</div>
			<div>
				<h2 className='text-black text-[35px]'>Loading...</h2>
			</div>
		</div>
	);
};

export default Loader;
