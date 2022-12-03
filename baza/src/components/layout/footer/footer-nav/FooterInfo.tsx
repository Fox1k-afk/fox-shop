import React from 'react';
import { Link } from 'react-router-dom';

import payMethod from '../../../../assets/images/visa-and-mastercard.png';
import s from '../Footer.module.css';

const FooterInfo = () => {
	return (
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
	);
};

export default FooterInfo;
