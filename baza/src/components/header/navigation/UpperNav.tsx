import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import person from '../../..//assets/images/icons8-user-25.png';
import cart from '../../../assets/images/icons8-shopping-cart-25.png';
import registr from '../../../assets/images/registr.png';
import logoUA from '../../../assets/svg/I_stand_with_Ukraine_banner.svg';
import favorite from '../../../assets/svg/icons8-box.svg';
import loup from '../../../assets/svg/icons8-search.svg';
import { LoginContext } from '../../../context/ProfileContext';
import { SearchContext } from '../../../context/SearchContext';
import { useAppSelector } from '../../../hooks/redux';
import Modal from '../../modals/_Modal';
import LoginRegist from '../../modals/login/LoginRegist';
import SearchProduct from '../../modals/SearchProduct';
import styles from '../Navigation.module.css';

const UpperNav = () => {
	const auth = useAppSelector((state) => state.auth);
	const { cartTotalQuantity } = useAppSelector((state) => state.cart);
	const navigate = useNavigate();

	const {
		modal: search,
		open: searchOpen,
		close: searchClose,
	} = useContext(SearchContext);

	const {
		modal: login,
		open: loginOpen,
		close: loginClose,
	} = useContext(LoginContext);

	return (
		<div
			className={`${styles.header_nav_container} ${styles.header_nav_container_fullW}`}
		>
			{search && (
				<Modal onClose={searchClose}>
					<SearchProduct onClose={searchClose} />
				</Modal>
			)}

			{login && (
				<Modal onClose={loginClose}>
					<LoginRegist onClose={loginClose} />
				</Modal>
			)}

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
					<button onClick={searchOpen}>
						<img src={loup} alt='loup' className=' flex items-center w-[25px] ' />
					</button>
				</div>

				<div className={styles.icon_button}>
					{auth.loggined ? (
						<button
							onClick={() => {
								navigate('/profile');
							}}
						>
							<img src={person} alt='person' />
						</button>
					) : (
						<button onClick={loginOpen}>
							<img src={registr} alt='regist' />
						</button>
					)}
				</div>

				<div className={styles.icon_button}>
					<Link to={'/favorites'}>
						<img src={favorite} alt='favorite' />
					</Link>
				</div>

				<div className={styles.icon_button}>
					<Link to={'/cart'}>
						<img src={cart} alt='cart' />
						<div className='absolute bg-white text-black rounded-2xl w-[16px] h-[16px] font-medium text-[11px] -top-[5px] -right-[15px] flex items-center justify-center'>
							{cartTotalQuantity}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UpperNav;
