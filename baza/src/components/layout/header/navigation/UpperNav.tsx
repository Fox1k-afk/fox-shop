import React, { useContext, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import favorite from '../../../../assets/images/favorite.png';
import carT from '../../../../assets/images/icons8-shopping-cart-25.png';
import person from '../../../../assets/images/icons8-user-25.png';
import registr from '../../../../assets/images/registr.png';
import logoUA from '../../../../assets/svg/I_stand_with_Ukraine_banner.svg';
import loup from '../../../../assets/svg/icons8-search.svg';
import { LoginContext } from '../../../../context/ProfileContext';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { getTotals } from '../../../../store/slices/cartSlice';
import { openModal } from '../../../../store/slices/modalSlice';
import Modal from '../../../modals/_Modal';
import LoginRegist from '../../../modals/login/LoginRegist';
import SearchProduct from '../../../modals/SearchProduct';
import styles from '../Header.module.css';

const UpperNav = () => {
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state) => state.cart);
	const { search } = useAppSelector((state) => state.modal);

	useEffect(() => {
		dispatch(getTotals());
	}, [dispatch, cart]);

	const auth = useAppSelector((state) => state.auth);
	const { cartTotalQuantity } = useAppSelector((state) => state.cart);
	const navigate = useNavigate();

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
				<Modal>
					<SearchProduct />
				</Modal>
			)}

			{login && (
				<Modal onClose={loginClose}>
					<LoginRegist onClose={loginClose} />
				</Modal>
			)}

			<div className={styles.header_nav_up_top_link}>
				<NavLink
					to={'/main'}
					className={({ isActive }) => (isActive ? styles.active : undefined)}
				>
					<span>main</span>
				</NavLink>
			</div>

			<div className={styles.header_nav_up_top_link}>
				<NavLink
					to={'/search'}
					className={({ isActive }) => (isActive ? styles.active : undefined)}
				>
					<span>search</span>
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
					<button
						onClick={() => {
							dispatch(openModal());
						}}
					>
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
						<button onClick={loginOpen} className='w-[22px]'>
							<img src={registr} alt='regist' />
						</button>
					)}
				</div>

				<div className={styles.icon_button}>
					<Link to={'/main/favorites'}>
						<img src={favorite} alt='favorite' className='w-[28px]' />
					</Link>
				</div>

				<div className={styles.icon_button}>
					<Link to={'/main/cart'}>
						<img src={carT} alt='cart' className='w-[30px]' />
						<div className={styles.cart__quantity}>{cartTotalQuantity}</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UpperNav;
