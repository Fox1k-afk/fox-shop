import React, { useState } from 'react';

import { shopAPI } from '../../services/ShopService';
import Loader from '../Loader';
import s from './Parnyam.module.css';
import Product from './Product';

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
						<Product product={product} key={product.id} />
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
