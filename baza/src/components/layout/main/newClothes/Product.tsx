import React, { useState } from 'react';

import { useAppDispatch } from '../../../../hooks/redux';
import { IProduct } from '../../../../models/IProduct';
import {
	addToFavorites,
	removeFromFavorites,
} from '../../../../store/slices/FavoritesSlice';
import emptyHeart from '../../../../assets/svg/emptyheart.svg';
import fullHeart from '../../../../assets/svg/fullheart.svg';
import s from '../Main.module.css';

interface ProductProps {
	product: IProduct;
}

const Product = ({ product }: ProductProps) => {
	const [like, setLike] = useState(false);

	const dispatch = useAppDispatch();

	const setFavorite = (product: IProduct) => {
		dispatch(addToFavorites(product));
		setLike(true);
	};

	const delFavorite = (product: IProduct) => {
		dispatch(removeFromFavorites(product));
		setLike(false);
	};

	return (
		<div className={s.main__product_catalog} key={product.id}>
			<div className={s.product_card__container}>
				<div className={s.product_card__image_container}>
					<div className={s.product_card__main_image}>
						<a href={`/product/${product.id}`}>
							<img src={product.image} alt={product.title} />
						</a>
					</div>

					{like ? (
						<button
							className={s.product_card__like}
							onClick={() => delFavorite(product!)}
						>
							<img src={fullHeart} alt='liked' className=' h-[15px]' />
						</button>
					) : (
						<button
							className={s.product_card__like}
							onClick={() => setFavorite(product!)}
						>
							<img src={emptyHeart} alt='not-liked' className=' h-[15px]' />
						</button>
					)}
				</div>

				<div className={s.product_card__info}>
					<span className={s.product_card__info_title}>{product.title}</span>
					<span className={s.product_card__info_rating}>
						rate: {product.rating.rate}
					</span>

					<div>
						<span className='text-black text-[14px]'>{product.price} $.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
