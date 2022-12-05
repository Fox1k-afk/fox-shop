import React, { useEffect, useState } from 'react';

import loupe from '../../assets/svg/loupe-black.svg';
import s from './Search.module.css';
import Product from '../../components/layout/main/newClothes/Product';
import Loader from '../../components/universal/Loader';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SearchFilter from 'react-filter-search';
import { IProduct } from '../../models/IProduct';
import axios, { AxiosError } from 'axios';

const Search = () => {
	const [searchInput, setSearchInput] = useState('');
	const [productData, setProductData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	console.log(productData);

	const getResponse = async () => {
		setIsLoading(true);
		try {
			const res: any = await axios.get(
				'https://fakestoreapi.com/products?sort=desc'
			);

			setProductData(res.data);
		} catch (error) {
			const err = error as AxiosError;

			console.log(err.response?.data);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		getResponse();
	}, []);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
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
									value={searchInput}
									onChange={changeHandler}
									type='text'
									className='bg-[#f9f9f9]'
									placeholder='Type something...'
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
							{isLoading && <Loader />}

							<SearchFilter
								value={searchInput}
								data={productData}
								renderResults={(results: IProduct[]) =>
									results.map((product: IProduct) => (
										<Product product={product} key={product.id} />
									))
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
