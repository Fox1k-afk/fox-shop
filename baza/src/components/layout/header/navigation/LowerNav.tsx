import React from 'react';
import { Link } from 'react-router-dom';

import Accessories from './dropdownLlist/Accessories';
import Bags from './dropdownLlist/Bags';
import Clothes from './dropdownLlist/Clothes';
import Shoes from './dropdownLlist/Shoes';
import styles from '../Header.module.css';

const LowerNav = () => {
	return (
		<div
			className={`${styles.header_nav_container} ${styles.header_nav_container_category}`}
		>
			<div className={styles.nav_link}>
				<div>
					<Link to={'/discounts'}>
						<span className={`${styles.nav_link_discount} ${styles.nav_link_span}`}>
							Discount
						</span>
					</Link>
				</div>
			</div>

			<div className={styles.nav_link}>
				<Link to={'/new-product'}>
					<span className={`${styles.nav_link_news} ${styles.nav_link_span}`}>
						New products
					</span>
				</Link>
			</div>

			<div className={styles.nav_link}>
				<Link to={'/fox-basic'}>
					<span className={styles.nav_link_span}>Fox Basic</span>
				</Link>
			</div>

			<div className={styles.nav_link}>
				<Link to={'/fox-tactical'}>
					<span className={styles.nav_link_span}>Fox Tactical</span>
				</Link>
			</div>

			<div className={`${styles.nav_link} ${styles.nav_link_dropdown}`}>
				<Link to={'/clothes'}>
					<span
						className={`${styles.nav_link_span} ${styles.nav_link_span_dropdowns_hover}`}
					>
						Clothes
					</span>
				</Link>

				<Clothes />
			</div>

			<div className={`${styles.nav_link} ${styles.nav_link_dropdown}`}>
				<Link to={'/shoes'}>
					<span
						className={`${styles.nav_link_span} ${styles.nav_link_span_dropdowns_hover}`}
					>
						Shoes
					</span>
				</Link>

				<Shoes />
			</div>

			<div className={`${styles.nav_link} ${styles.nav_link_dropdown}`}>
				<Link to={'/bags'}>
					<span
						className={`${styles.nav_link_span} ${styles.nav_link_span_dropdowns_hover}`}
					>
						Bags
					</span>
				</Link>

				<Bags />
			</div>

			<div className={`${styles.nav_link} ${styles.nav_link_dropdown}`}>
				<Link to={'/accessories'}>
					<span
						className={`${styles.nav_link_span} ${styles.nav_link_span_dropdowns_hover}`}
					>
						Accessories
					</span>
				</Link>

				<Accessories />
			</div>
		</div>
	);
};

export default LowerNav;
