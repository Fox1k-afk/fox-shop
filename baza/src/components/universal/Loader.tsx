import React from 'react';
import loader from '../../assets/svg/loader.svg';

const Loader = () => {
	return (
		<div className='flex justify-center items-center flex-col w-full'>
			<div className='w-[75px] h-[75px]'>
				<img src={loader} alt='loader' className='flex self-center' />
			</div>
			<div>
				<h2 className='text-black text-[25px]'>Loading...</h2>
			</div>
		</div>
	);
};

export default Loader;
