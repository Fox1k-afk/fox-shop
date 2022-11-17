import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../svg/fox.svg';
import logoUA from '../../svg/I_stand_with_Ukraine_banner.svg';
import loup from '../../svg/icons8-search.svg';
import person from '../../svg/icons8-user-25.png';
import favorite from '../../svg/icons8-box.svg';
import cart from '../../svg/icons8-shopping-cart-25.png';

import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main_container}>
				<div className={styles.container}>
					<div className={styles.logo_container}>
						{/* <button className={styles.hamburger_slider}></button>    hamb for mobiles */}
						<div className={styles.logo_wrapp}>
							<div>
								<a href='/'>
									<div>
										<img src={logo} alt='logo' className={styles.logo_img} />
									</div>
								</a>
							</div>
						</div>
					</div>

					<div className={styles.menu_nav_container}>
						{/* <div className={styles.showOnMobile}></div> mobiles */}
						<div
							className={`${styles.header_nav_container} ${styles.header_nav_container_fullW}`}
						>
							<div className={styles.header_nav_up_top_link}>
								<NavLink
									to={'/'}
									className={({ isActive }) => (isActive ? styles.active : undefined)}
								>
									<span>For Boys</span>
								</NavLink>
							</div>

							<div className={styles.header_nav_up_top_link}>
								<NavLink
									to={'/about'}
									className={({ isActive }) => (isActive ? styles.active : undefined)}
								>
									<span>For Girls</span>
								</NavLink>
							</div>

							<div className={styles.icon_button_container}>
								<a
									href='https://savelife.in.ua/donate/'
									target='_blank'
									rel='noreferrer'
									className=' mr-[15px]'
								>
									<img src={logoUA} alt='logoUA' className=' w-[100px]' />
								</a>

								<div className={styles.icon_button}>
									<button>
										<img src={loup} alt='loup' className=' flex items-center w-[25px] ' />
									</button>
								</div>

								<div className={styles.icon_button}>
									<button>
										<img src={person} alt='person' />
									</button>
								</div>

								<div className={styles.icon_button}>
									<Link to={'/favorites'}>
										<img src={favorite} alt='favorite' />
									</Link>
								</div>

								<div className={styles.icon_button}>
									<Link to={'/cart'}>
										<img src={cart} alt='cart' />
									</Link>
								</div>
							</div>
						</div>

						<div
							className={`${styles.header_nav_container} ${styles.header_nav_container_category}`}
						>
							<div className={styles.nav_link}>
								<div>
									<Link to={'/discounts'}>
										<span
											className={`${styles.nav_link_discount} ${styles.nav_link_span}`}
										>
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

							<div className={styles.nav_link}>
								<Link to={'/clothes'}>
									<span className={styles.nav_link_span}>Clothes</span>
								</Link>
							</div>

							<div className={styles.nav_link}>
								<Link to={'/shoes'}>
									<span className={styles.nav_link_span}>Shoes</span>
								</Link>
							</div>

							<div className={styles.nav_link}>
								<Link to={'/bags'}>
									<span className={styles.nav_link_span}>Bags</span>
								</Link>
							</div>

							<div className={styles.nav_link}>
								<Link to={'/accessories'}>
									<span className={styles.nav_link_span}>Accessories</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
