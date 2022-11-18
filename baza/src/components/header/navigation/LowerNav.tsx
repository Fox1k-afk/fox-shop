import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Accessories from '../dropdownLlist/Accessories';
import Bags from '../dropdownLlist/Bags';
import Clothes from '../dropdownLlist/Clothes';
import Shoes from '../dropdownLlist/Shoes';
import styles from '../Navigation.module.css';

const DropdownNav = () => {
	const [showClothes, setShowClothes] = useState(false);
	const [showShoes, setShowShoes] = useState(false);
	const [showBags, setShowBags] = useState(false);
	const [showAccessories, setShowAccesories] = useState(false);
	return (
		<>
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

				<div className={styles.nav_link} onMouseEnter={() => setShowClothes(false)}>
					<Link to={'/fox-tactical'}>
						<span className={styles.nav_link_span}>Fox Tactical</span>
					</Link>
				</div>

				{showClothes ? (
					<div
						className={`${styles.nav_link} ${styles.nav_link_dropdown}`}
						onMouseEnter={() => setShowClothes(true)}
					>
						<Link to={'/clothes'}>
							<span
								className={`${styles.nav_link_span} ${styles.nav_link_span_dropdowns_hover}`}
							>
								Clothes
							</span>
						</Link>
					</div>
				) : (
					<div
						className={`${styles.nav_link}`}
						onMouseEnter={() => [
							setShowClothes(true),
							setShowShoes(false),
							setShowBags(false),
							setShowAccesories(false),
						]}
					>
						<Link to={'/clothes'}>
							<span className={`${styles.nav_link_span}`}>Clothes</span>
						</Link>
					</div>
				)}

				{showShoes ? (
					<div
						className={`${styles.nav_link} ${styles.nav_link_dropdown}`}
						onMouseEnter={() => setShowShoes(true)}
					>
						<Link to={'/shoes'}>
							<span
								className={`${styles.nav_link_span} ${styles.nav_link_span_dropdowns_hover}`}
							>
								Shoes
							</span>
						</Link>
					</div>
				) : (
					<div
						className={`${styles.nav_link}`}
						onMouseEnter={() => [
							setShowClothes(false),
							setShowShoes(true),
							setShowBags(false),
							setShowAccesories(false),
						]}
					>
						<Link to={'/shoes'}>
							<span className={`${styles.nav_link_span}`}>Shoes</span>
						</Link>
					</div>
				)}

				{showBags ? (
					<div
						className={`${styles.nav_link} ${styles.nav_link_dropdown}`}
						onMouseEnter={() => setShowBags(true)}
					>
						<Link to={'/bags'}>
							<span
								className={`${styles.nav_link_span} ${styles.nav_link_span_dropdowns_hover}`}
							>
								Bags
							</span>
						</Link>
					</div>
				) : (
					<div
						className={`${styles.nav_link}`}
						onMouseEnter={() => [
							setShowClothes(false),
							setShowShoes(false),
							setShowBags(true),
							setShowAccesories(false),
						]}
					>
						<Link to={'/bags'}>
							<span className={`${styles.nav_link_span}`}>Bags</span>
						</Link>
					</div>
				)}

				{showAccessories ? (
					<div
						className={`${styles.nav_link} ${styles.nav_link_dropdown}`}
						onMouseEnter={() => setShowAccesories(true)}
					>
						<Link to={'/accessories'}>
							<span
								className={`${styles.nav_link_span} ${styles.nav_link_span_dropdowns_hover}`}
							>
								Accessories
							</span>
						</Link>
					</div>
				) : (
					<div
						className={`${styles.nav_link}`}
						onMouseEnter={() => [
							setShowClothes(false),
							setShowShoes(false),
							setShowBags(false),
							setShowAccesories(true),
						]}
					>
						<Link to={'/accessories'}>
							<span className={`${styles.nav_link_span}`}>Accessories</span>
						</Link>
					</div>
				)}
			</div>
			{showClothes && <Clothes />}
			{showShoes && <Shoes />}
			{showBags && <Bags />}
			{showAccessories && <Accessories />}

			<div
				className={styles.drop_off_trigger}
				onMouseEnter={() => [
					setShowClothes(false),
					setShowShoes(false),
					setShowBags(false),
					setShowAccesories(false),
				]}
			></div>
		</>
	);
};

export default DropdownNav;
