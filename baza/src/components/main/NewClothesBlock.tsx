import React, { useState } from 'react';
import { shopAPI } from '../../services/ShopService';
import s from './Parnyam.module.css';
import emptyhHeart from '../../assets/svg/emptyheart.svg';
import fulHeart from '../../assets/svg/fullheart.svg';
import loader from '../../assets/svg/reload.svg';
import Loader from '../Loader';

const NewClothesBlock = () => {
	const { data: products, isLoading } = shopAPI.useFetchAllProductsQuery(30);
	const [like, setLike] = useState(false);

	return (
		<div className={s.main__content_item}>
			{isLoading && <Loader />}

			<div className={s.main__title_container}>
				<div className={s.underlined_title__container}>
					<span>Novinki</span>
				</div>
			</div>
			<div>
				<div className={s.main__products_container}>
					{products?.map((product) => (
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
								</div>
							</div>
						</div>
					))}
				</div>

				{/* <div className={s.main__loader}>
					<div className={s.loader__container}>
						<img src={loader} alt='loader' className='h-[50px]' />
					</div>
					<div className={s.main__loader_text}>Loading</div>
				</div> */}
			</div>
		</div>
	);
};

export default NewClothesBlock;
