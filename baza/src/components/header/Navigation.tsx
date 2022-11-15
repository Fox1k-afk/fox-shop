import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className='bg-black h-[90px]'>
			<nav className=' h-[90px] flex justify-between px-5 text-white items-center  mx-auto max-w-[1170px] '>
				<span className=' font-bold'>text test</span>
				<span>
					<Link className=' mr-2' to='/'>
						Products
					</Link>
					<Link to='/about'>About</Link>
				</span>
			</nav>
		</div>
	);
};

export default Navigation;
