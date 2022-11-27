import React, { useState } from 'react';

import emptyhHeart from '../../../assets/svg/emptyheart.svg';
import fulHeart from '../../../assets/svg/fullheart.svg';
import { useAppDispatch } from '../../../hooks/redux';
import { IProduct } from '../../../models/IProduct';
import { addToCart } from '../../../store/slices/cartSlice';
import s from '../Parnyam.module.css';

interface ProductProps {
	product: IProduct;
}

const Product = ({ product }: ProductProps) => {
	const [like, setLike] = useState(false);
	const dispatch = useAppDispatch();

	const handleAddToCart = (product: IProduct) => {
		dispatch(addToCart(product));
	};

	return (
		<div className={s.main__product_catalog} key={product.id}>
			<div className={s.product_card__container}>
				<div className={s.product_card__image_container}>
					<div className={s.product_card__main_image}>
						<img src={product.image} alt={product.title} />
					</div>

					<button
						onClick={() => setLike((prev) => !prev)}
						className={s.product_card__like}
					>
						{like ? (
							<img src={fulHeart} alt='liked' className=' h-[15px]' />
						) : (
							<img src={emptyhHeart} alt='not liked' className=' h-[15px]' />
						)}
					</button>
				</div>

				<div className={s.product_card__info}>
					<span className={s.product_card__info_title}>{product.title}</span>
					<span className={s.product_card__info_rating}>
						rate: {product.rating.rate}
					</span>

					<div>
						<span className='text-black text-[14px]'>{product.price} $.</span>
					</div>
					<div>
						<button
							onClick={() => handleAddToCart(product)}
							className=' bg-black text-white p-[5px]'
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
