import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import favorite from '../../../../assets/images/favorite.png';
import carT from '../../../../assets/images/icons8-shopping-cart-25.png';
import person from '../../../../assets/images/icons8-user-25.png';
import registr from '../../../../assets/images/registr.png';
import loop from '../../../../assets/svg/icons8-search.svg';
import phone from '../../../../assets/svg/phone-call-svgrepo-com.svg';
import { LoginContext } from '../../../../context/ProfileContext';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { openModal } from '../../../../store/slices/modalSlice';
import Modal from '../../../modals/_Modal';
import LoginRegist from '../../../modals/login/LoginRegist';
import SearchProduct from '../../../modals/SearchProduct';
import styles from '../Header.module.css';

const ShowOnMobile = () => {
	const { cartTotalQuantity } = useAppSelector((state) => state.cart);
	const auth = useAppSelector((state) => state.auth);
	const { search } = useAppSelector((state) => state.modal);

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const {
		modal: login,
		open: loginOpen,
		close: loginClose,
	} = useContext(LoginContext);

	return (
		<div className={styles.showOnMobile}>
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
			<div className={styles.header_phones_container}>
				<img src={phone} alt='phone' className='bg-white w-[20px]' />
			</div>

			<button
				onClick={() => {
					dispatch(openModal());
				}}
				className={styles.header__icon_button}
			>
				<img src={loop} alt='loop' className='w-[25px]' />
			</button>

			<div className={styles.header__icon_button}>
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

			<div className={styles.header__icon_button}>
				<Link to='/main/favorites'>
					<img src={favorite} alt='loop' className='w-[25px]' />
				</Link>
			</div>

			<div className={styles.header__icon_button}>
				<Link to={'/main/cart'}>
					<img src={carT} alt='cart' className='w-[30px]' />
					<div className={styles.cart__quantity}>{cartTotalQuantity}</div>
				</Link>
			</div>
		</div>
	);
};

export default ShowOnMobile;
