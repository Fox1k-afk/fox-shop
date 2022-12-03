import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux';
import { shopAPI } from '../../store/services/ShopService';
import { logoutUser } from '../../store/slices/AuthSlice';
import s from './Profile.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/universal/Loader';

const Profile = () => {
	const { data: user, isLoading } = shopAPI.useFetchUserQuery('');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const toastkik = () => {
		toast.warn('🦄 You are log out of the acc!', {
			position: 'bottom-left',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	};

	return (
		<div className={s.profile__wrapper}>
			<div className={s.profile__content_container}>
				<div>
					<div>
						<div className={s.page_title}>
							<h1>Personal Area</h1>
						</div>
					</div>
					<div className={s.profile__subtitle}>
						<button
							onClick={() => {
								dispatch(logoutUser(null));
								navigate('/main');
								toastkik();
							}}
						>
							log out of the account
						</button>
					</div>
				</div>
				<div className={s.profile__content}>
					{isLoading && <Loader />}
					<div className={s.profile__user_container}>
						<div className={s.profile__user_info}>
							<span className=' text-blue-500'>Username: {user?.username}</span>
						</div>
						<div className={s.profile__user_info}>
							<span className=' text-blue-500'>
								First name: {user?.name.firstname} && Last name: {user?.name.lastname}
							</span>
						</div>
						<div className={s.profile__user_info}>
							<span className=' text-blue-500'>Email: {user?.email}</span>
						</div>
						<div className={s.profile__user_info}>
							<span className=' text-yellow-300'>Phone: {user?.phone}</span>
						</div>
						<div className={s.profile__user_info}>
							<span className=' text-yellow-300'>City: {user?.address.city}</span>
						</div>

						<div className={s.profile__user_info}>
							<span className=' text-yellow-300'>Street: {user?.address.street}</span>
						</div>

						<div className={s.profile__user_info}>
							API is not able to create a registration, there is no data when logging
							in, only a token
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
