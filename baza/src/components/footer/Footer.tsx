import React from 'react';
import FooterNav from './footer-nav/FooterNav';
import s from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={s.footer_wrapper}>
			<FooterNav />
		</footer>
	);
};

export default Footer;
