import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loupe from '../../../assets/svg/loupe-black.svg';
import { useAppDispatch } from '../../../hooks/redux';
import { closeModal } from '../../../store/slices/modalSlice';
import s from './SearchProduct.module.css';

const SearchProduct = () => {
	const [value, setValue] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	return (
		<div className={s.search_container}>
			<div className={s.search_title_container}>
				<div className={s.search_title}>poshuk</div>

				<button
					className={s.search_button}
					onClick={() => {
						dispatch(closeModal());
					}}
				>
					X
				</button>
			</div>

			<div className={s.search__form}>
				<div className={s.search__select}>
					<div className={s.search__selected}>for all</div>
				</div>

				<div className={s.search__input}>
					<input
						value={value}
						onChange={changeHandler}
						type='text'
						placeholder='click on the loup to go to the search page >>>>>>>>>>'
					/>

					<button
						onClick={() => [navigate('/search'), dispatch(closeModal())]}
						className={s.search__input_button}
					>
						<div>
							<img src={loupe} alt='loupe' />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchProduct;
