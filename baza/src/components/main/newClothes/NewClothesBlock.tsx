import React from 'react';

import { shopAPI } from '../../../store/services/ShopService';
import Loader from '../../Loader';
import s from '../Parnyam.module.css';
import Product from './Product';

const NewClothesBlock = () => {
	const { data: products, isLoading } = shopAPI.useFetchAllProductsQuery(30);

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
			</div>
		</div>
	);
};

export default NewClothesBlock;
