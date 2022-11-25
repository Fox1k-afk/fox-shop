import React, { useState } from 'react';
import s from '../components/main/Search.module.css';
import loupe from '../assets/svg/loupe-black.svg';
import { shopAPI } from '../services/ShopService';
import Product from '../components/main/Product';

const Search = () => {
	const [value, setValue] = useState('');
	const { data: allProducts } = shopAPI.useSortProductsQuery('');
	const test = allProducts;
	console.log(test);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className={s.searchpage__wrapper}>
			<div className={s.searchpage__content_container}>
				<div>
					<div className={s.searchpage__page_header}>
						<div>
							<div className={s.page_title}>
								<h1>Search result</h1>
							</div>
						</div>
						<div className={s.searchpage__products_count}>
							Finded: <span>_amount</span>
						</div>
					</div>
					<div className={s.searchpage__search}>
						<div className={s.search__form}>
							<div className={`${s.search__select} ${'bg-[#f9f9f9]'}`}>
								<div className={s.search__selected}>For all</div>
							</div>
							<div className={s.search__input}>
								<input
									value={value}
									onChange={changeHandler}
									type='text'
									className='bg-[#f9f9f9]'
									placeholder='Doesn"t work ;('
								/>

								<button className=' absolute top-0 right-0 bottom-0 p-[12px] my-auto mx-0'>
									<div>
										<img src={loupe} alt='loupe' />
									</div>
								</button>
							</div>
						</div>
					</div>
					<div>
						<div className={s.searcpage__products_container}>
							{allProducts?.map((product) => (
								<Product product={product} key={product.id} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
