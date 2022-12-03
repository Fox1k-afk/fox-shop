import React from 'react';
import { Link } from 'react-router-dom';

import s from '../Footer.module.css';

const FooterCatalog = () => {
	return (
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
	);
};

export default FooterCatalog;
