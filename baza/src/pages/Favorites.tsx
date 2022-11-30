import React from 'react';
import s from './pagesStyles/Favorites.module.css';
import favoritesEmpty from '../assets/svg/favorites-empty.svg';
import { useNavigate } from 'react-router-dom';

const About = () => {
	const navigate = useNavigate();

	return (
		<div className={s.favorites__wrapper}>
			<div className={s.favorites__content_container}>
				<div>
					<div className={s.favorites__page_header}>
						<div className={s.page_title}>
							<h1>Favorites</h1>
						</div>
					</div>

					<div>
						<div className={s.favorites__products_container}>
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
						</div>
					</div>

					<div></div>
				</div>
			</div>
		</div>
	);
};

export default About;
