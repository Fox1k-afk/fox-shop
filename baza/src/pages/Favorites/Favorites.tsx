import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { clearFavorites } from '../../store/slices/favoritesSlice';

import favoritesEmpty from '../../assets/svg/favorites-empty.svg';
import FavoriteProduct from './FavoriteProduct';
import s from './Favorites.module.css';

const About = () => {
	const navigate = useNavigate();
	const favorites = useAppSelector((state) => state.favorites);
	const dispatch = useAppDispatch();

	return (
		<div className={s.favorites__wrapper}>
			<ToastContainer />
			<div className={s.favorites__content_container}>
				<div>
					<div className={s.favorites__page_header}>
						<div className={s.page_title}>
							<h1>Favorites</h1>
						</div>
						{favorites.favoriteItems.length >= 1 && (
							<div className={s.favorites__reset}>
								<button onClick={() => dispatch(clearFavorites())}>
									Clear favorites
								</button>
							</div>
						)}
					</div>

					<div>
						<div className={s.favorites__products_container}>
							{favorites.favoriteItems.length === 0 ? (
								<div className={s.favorites__loader}>
									<div className={s.favorites__empty_img}>
										<img src={favoritesEmpty} alt='empty' />
									</div>

									<div className={s.favorites__no_products}>
										there are no products in favorites
									</div>
									<div>
										<button
											onClick={() => navigate('/main')}
											className={s.favorites_button}
										>
											GO to katalog
										</button>
									</div>
								</div>
							) : (
								<>
									{favorites.favoriteItems.map((product) => (
										<FavoriteProduct product={product} key={product.id} />
									))}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
