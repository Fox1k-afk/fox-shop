import React, { useState } from 'react';
import upArrow from '../assets/svg/up-arrow.svg';

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<aside
			onClick={scrollToTop}
			style={{
				width: '50px',
				height: '50px',
				borderRadius: '50%',
				backgroundColor: '#000',
				cursor: 'pointer',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				transition: 'right .5s',
				zIndex: '1000',
				position: 'fixed',
				bottom: '27px',
				right: visible ? '87px' : '-50px',
			}}
		>
			<img src={upArrow} alt='Up' className=' flex items-center' />
		</aside>
	);
};

export default ScrollButton;
