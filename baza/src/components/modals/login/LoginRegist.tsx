import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import google from '../../../assets/images/google.png';
import facebook from '../../../assets/svg/icons8-facebook.svg';
import { LoginContext } from '../../../context/ProfileContext';
import { useAppSelector } from '../../../hooks/redux';
import LoginForm from './LoginForm';
import s from './LoginRegist.module.css';

interface LoginRegistProps {
	onClose: () => void;
}

const LoginRegist = ({ onClose }: LoginRegistProps) => {
	const auth = useAppSelector((state) => state.auth);
	const [showPswrd, setShowPswrd] = useState(false);

	const { close: loginClose } = useContext(LoginContext);

	const navigate = useNavigate();

	useEffect(() => {
		const toastik = () => {
			toast.success('🦄 You are loggined now!', {
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

		if (auth.loggined) {
			loginClose();
			navigate('/main');
			toastik();
		}
	}, [auth.loggined, loginClose, navigate]);

	return (
		<div className={s.modal__main_container}>
			<div className={`${s.modal__movable} ${s.modal__movable_active}`}>
				<div className={s.modal__container}>
					<div className={s.modal__title_container}>
						<div className={s.underlined_title__container}>
							<span>Log in</span>
						</div>

						<div>
							<button className='text-black text-[30px]' onClick={onClose}>
								X
							</button>
						</div>
					</div>

					<div className={s.modal__content}>
						<div className={s.modal__form_container}>
							<div className={`${s.modal__form} ${s.modal__form_sign_in}`}>
								<div className={s.modal__form_title}>From fox account</div>
								<LoginForm />
								{auth.loginStatus === 'rejected' ? (
									<p className='mt-[25px] text-red-600'>{auth.loginError}</p>
								) : null}
							</div>

							<div>
								<div className={s.modal__form_title}>From socials</div>
								<div className={s.modal__socials}>
									<div className={s.modal__social}>
										<button>
											<div className='flex justify-start'>
												<img src={facebook} alt='facebook' />
											</div>
										</button>
									</div>

									<div className={s.modal__social}>
										<button>
											<div className='flex justify-start'>
												<img src={google} alt='google' />
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className={s.modal__reset}>
							<button
								onClick={() => {
									setShowPswrd((prev) => !prev);
								}}
							>
								Forgot password
							</button>
							{showPswrd && (
								<div className=' mt-[15px] flex flex-col'>
									<p className='pb-2'>
										<span className='text-blue-400'>Username:</span> johnd
									</p>
									<p>
										<span className='text-yellow-300'>Password:</span> m38rmF$
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginRegist;
