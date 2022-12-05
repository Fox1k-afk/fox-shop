import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import fullHeart from '../../assets/svg/fullheart.svg';
import sm from '../../components/layout/main/Main.module.css';
import { useAppDispatch } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { removeFromFavorites } from '../../store/slices/favoritesSlice';
import s from './Favorites.module.css';

interface FavoriteProductProps {
	product: IProduct;
}

const FavoriteProduct = ({ product }: FavoriteProductProps) => {
	const [like, setLike] = useState(true);

	const dispatch = useAppDispatch();

	const delFavorite = (product: IProduct) => {
		dispatch(removeFromFavorites(product));
		setLike(false);
	};

	return (
		<div className={s.favorites__product_catalog}>
			<div className={sm.product_card__container}>
				<div className={sm.product_card__image_container}>
					<div className={sm.product_card__main_image}>
						<Link to={`/main/product/${product.id}`}>
							<img src={product.image} alt='productImg' />
						</Link>
					</div>

					{like && (
						<button
							className={sm.product_card__like}
							onClick={() => delFavorite(product!)}
						>
							<img src={fullHeart} alt='liked' className=' h-[15px]' />
						</button>
					)}
				</div>

				<div className={sm.product_card__info}>
					<span className={sm.product_card__info_title}>{product.title}</span>

					<div>
						<span className={sm.product_card__info_price}>{product.price} $</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FavoriteProduct;
