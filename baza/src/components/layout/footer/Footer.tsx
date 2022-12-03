import React from 'react';

import FooterCatalog from './footer-nav/FooterCatalog';
import FooterInfo from './footer-nav/FooterInfo';
import FooterSocials from './footer-nav/FooterSocials';
import s from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={s.footer_wrapper}>
			<div className={s.footer__container}>
				<FooterCatalog />

				<FooterInfo />

				<FooterSocials />
			</div>

			<div className={s.footer__divider}></div>

			<div className={s.footer__copyright}>© 1997 - 2022 Fox1k</div>
		</footer>
	);
};

export default Footer;
