import React from 'react';
import { useNavigate } from 'react-router-dom';

import favoritesEmpty from '../assets/svg/favorites-empty.svg';
import { useAppSelector } from '../hooks/redux';
import FavoriteProduct from './FavoriteProduct';
import s from './pagesStyles/Favorites.module.css';

const About = () => {
	const navigate = useNavigate();
	const favorites = useAppSelector((state) => state.favorites);

	return (
		<div className={s.favorites__wrapper}>
			<div className={s.favorites__content_container}>
				<div>
					<div className={s.favorites__page_header}>
						<div className={s.page_title}>
							<h1>Favorites</h1>
						</div>
						{favorites.favoriteItems.length >= 1 && (
							<div className={s.favorites__reset}>
								<button>Clear favorites</button>
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
											onClick={() => navigate('/parnyam')}
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
