import React from 'react';

import letter from '../../../../assets/images/icons8-новый-пост-40.png';
import appleStore from '../../../../assets/svg/app-store.svg';
import googleStore from '../../../../assets/svg/google-play.svg';
import facebook from '../../../../assets/svg/icons8-facebook.svg';
import instagram from '../../../../assets/svg/icons8-instagram.svg';
import telegram from '../../../../assets/svg/icons8-telegram-app.svg';
import youtube from '../../../../assets/svg/icons8-youtube.svg';
import s from '../Footer.module.css';

const FooterSocials = () => {
	return (
		<div className={`${s.footer__socials} ${s.footer__link_container}`}>
			<div className={s.footer__title}>Social networks</div>

			<div className={s.footer__social_links}>
				<a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
					<img src={facebook} alt='facebook' />
				</a>
				<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
					<img src={instagram} alt='insta' />
				</a>

				<a href='https://www.telegram.com' target='_blank' rel='noreferrer'>
					<img src={telegram} alt='telegram' />
				</a>

				<a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
					<img src={youtube} alt='youtube' />
				</a>
			</div>

			<div className={s.footer__marketplaces}>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://play.google.com/store/apps'
				>
					<img src={googleStore} alt='google-store' />
				</a>

				<a target='_blank' rel='noreferrer' href='https://applestore.com'>
					<img src={appleStore} alt='apple-store' />
				</a>
			</div>

			<button className={s.footer__subscribe}>
				<div>
					<img src={letter} alt='letter' />
				</div>
				<span>Newsletter subscription</span>
			</button>
		</div>
	);
};

export default FooterSocials;
