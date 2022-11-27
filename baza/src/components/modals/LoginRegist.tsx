import React from 'react';

import google from '../../assets/images/google.png';
import facebook from '../../assets/svg/icons8-facebook.svg';
import { useAppSelector } from '../../hooks/redux';
import LoginForm from './LoginForm';
import s from './LoginRegist.module.css';

interface LoginRegistProps {
	onClose: () => void;
}

const LoginRegist = ({ onClose }: LoginRegistProps) => {
	const auth = useAppSelector((state) => state.auth);

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
									<p className='mt-[25px]'>{auth.loginError}</p>
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
							<button>Forgot password</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginRegist;
