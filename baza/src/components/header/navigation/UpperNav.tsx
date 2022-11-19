import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import person from '../../..//assets/images/icons8-user-25.png';
import logoUA from '../../../assets/svg/I_stand_with_Ukraine_banner.svg';
import favorite from '../../../assets/svg/icons8-box.svg';
import loup from '../../../assets/svg/icons8-search.svg';
import cart from '../../../assets/images/icons8-shopping-cart-25.png';
import styles from '../Navigation.module.css';

const IconsNav = () => {
	return (
		<div
			className={`${styles.header_nav_container} ${styles.header_nav_container_fullW}`}
		>
			<div className={styles.header_nav_up_top_link}>
				<NavLink
					to={'/parnyam'}
					className={({ isActive }) => (isActive ? styles.active : undefined)}
				>
					<span>For Boys</span>
				</NavLink>
			</div>

			<div className={styles.header_nav_up_top_link}>
				<NavLink
					to={'/devushkam'}
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
	);
};

export default IconsNav;
