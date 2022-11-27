import React, { useState } from 'react';

import { IProduct } from '../../../models/IProduct';
import emptyhHeart from '../../../assets/svg/emptyheart.svg';
import fulHeart from '../../../assets/svg/fullheart.svg';
import s from '../Parnyam.module.css';

interface DiscountProductProps {
	product: IProduct;
}

const DiscountProduct = ({ product }: DiscountProductProps) => {
	const [like, setLike] = useState(false);

	return (
		<div className={s.main__product_card} key={product.id}>
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

				<div className={s.product_card__discount}>
					-{Math.floor(Math.random() * 20) + 10}%
				</div>

				<div className={s.product_card__info}>
					<span className={s.product_card__info_title}>{product.title}</span>
					<span className={s.product_card__info_rating}>
						rate: {product.rating.rate}
					</span>

					<div>
						<span className={s.product_card__info_price}>{product.price} $.</span>
						<span className={s.product_card__info_oldprice}>
							{Math.floor(product.price * 80) / 100} $.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiscountProduct;
