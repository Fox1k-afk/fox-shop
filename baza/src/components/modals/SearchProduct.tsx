import React, { useState } from 'react';
import loupe from '../../assets/svg/loupe-black.svg';

interface SearchProductProps {
	onClose: () => void;
}

const SearchProduct = ({ onClose }: SearchProductProps) => {
	const [value, setValue] = useState('');

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<>
			<div className=' flex justify-between items-center mb-[25px]'>
				<div className='text-white uppercase tracking-[1.5px] text-[20px]  ml-[20px]'>
					poshuk
				</div>

				<button className='text-white text-[30px]' onClick={onClose}>
					X
				</button>
			</div>

			<div className='flex w-full'>
				<div className='w-[175px] min-w-[175px] border-r-[1px] border-r-neutral-400 cursor-pointer relative flex items-center py-[25px] px-[20px] bg-white'>
					<div
						className=' bg-transparent uppercase text-[13px] select-none font-bold tracking-[1.2px]
				 after:absolute after:top-[30px] after:mt-auto after:mr-[20px] after:mb-auto after:ml-0 after:right-0 after:w-0 after:h-0 after:border-[5px] after:border-solid after:border-transparent after:border-t-black	'
					>
						for all
					</div>
				</div>

				<div className=' relative w-full'>
					<input
						value={value}
						onChange={changeHandler}
						type='text'
						className=' bg-white w-full border-none py-[25px] pr-[50px] pl-[30px] text-[16px] tracking-[2px] outline-none'
						placeholder='Enter text for find'
					/>
					{/* <div className=' absolute w-[calc(100%-57px)] z-100'>
						autocomplete here
					</div> */}
					<button className=' absolute top-0 right-0 bottom-0 p-[12px] my-auto mx-0'>
						<div>
							<img src={loupe} alt='loupe' />
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default SearchProduct;
