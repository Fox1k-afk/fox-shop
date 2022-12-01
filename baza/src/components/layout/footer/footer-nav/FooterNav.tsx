import React from 'react';
import { Link } from 'react-router-dom';

import letter from '../../../../assets/images/icons8-новый-пост-40.png';
import payMethod from '../../../../assets/images/visa-and-mastercard.png';
import appleStore from '../../../../assets/svg/app-store.svg';
import googleStore from '../../../../assets/svg/google-play.svg';
import facebook from '../../../../assets/svg/icons8-facebook.svg';
import instagram from '../../../../assets/svg/icons8-instagram.svg';
import telegram from '../../../../assets/svg/icons8-telegram-app.svg';
import youtube from '../../../../assets/svg/icons8-youtube.svg';
import s from '../Footer.module.css';

const FooterNav = () => {
	return (
		<>
			<div className={s.footer__container}>
				<div className={`${s.footer__catalog} ${s.footer__link_container}`}>
					<div className={s.footer__title}>Katalog</div>
					<div className={s.footer__link}>
						<Link to={'/m/discounts'}>
							<span className={`${'text-red-600 hover:text-black'}`}>Sales</span>
						</Link>
					</div>

					<div className={s.footer__link}>
						<Link to={'/m/new-products'}>
							<span className={`${'text-green-500  hover:text-black'}`}>
								New products
							</span>
						</Link>
					</div>

					<div className={s.footer__link}>
						<Link to={'/m/fox-basic'}>
							<span>fox basic</span>
						</Link>
					</div>

					<div className={s.footer__link}>
						<Link to={'/m/fox-tactical'}>
							<span>fox tactitcal</span>
						</Link>
					</div>

					<div className={s.footer__link}>
						<Link to={'/m/clothes'}>
							<span>Clothes</span>
						</Link>
					</div>

					<div className={s.footer__link}>
						<Link to={'/m/new-shoes'}>
							<span>Shoes</span>
						</Link>
					</div>

					<div className={s.footer__link}>
						<Link to={'/m/backpack-bags'}>
							<span>Backpacks & bags</span>
						</Link>
					</div>

					<div className={s.footer__link}>
						<Link to={'/m/accessories'}>
							<span>Accessories</span>
						</Link>
					</div>
				</div>

				<div className={s.footer__info}>
					<div className={s.footer__title}>Information</div>
					<div className={s.footer__info_links}>
						<div className={s.footer__link_container}>
							<div className={s.footer__link}>
								<Link to={'/shops'}>
									<span>Shops</span>
								</Link>
							</div>

							<div className={s.footer__link}>
								<Link to={'/about-fox'}>
									<span>About us</span>
								</Link>
							</div>

							<div className={s.footer__link}>
								<Link to={'/delivery-and-payment'}>
									<span>Delivery, payment, returns</span>
								</Link>
							</div>

							<div className={s.footer__link}>
								<Link to={'/reviews'}>
									<span>News & feedback</span>
								</Link>
							</div>
						</div>

						<div className={s.footer__link_container}>
							<div className={s.footer__link}>
								<Link to={'/cooperation'}>
									<span>cooperation</span>
								</Link>
							</div>

							<div className={s.footer__link}>
								<Link to={'/public-offer-agreement'}>
									<span>public offer agreement</span>
								</Link>
							</div>

							<div className={s.footer__link}>
								<Link to={'/privacy'}>
									<span>privacy</span>
								</Link>
							</div>
							<img src={payMethod} alt='pay-methods' className=' w-[110px]' />
						</div>
					</div>
				</div>

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
			</div>

			<div className={s.footer__divider}></div>

			<div className={s.footer__copyright}>© 1997 - 2022 Fox1k</div>
		</>
	);
};

export default FooterNav;
