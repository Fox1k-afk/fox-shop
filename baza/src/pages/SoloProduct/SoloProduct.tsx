import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import eye from '../../assets/images/eye.png';
import emptyHeart from '../../assets/svg/emptyheart.svg';
import fullHeart from '../../assets/svg/fullheart.svg';
import info from '../../assets/svg/info.svg';
import Loader from '../../components/universal/Loader';
import { useAppDispatch } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { shopAPI } from '../../store/services/ShopService';
import {
	addToFavorites,
	removeFromFavorites,
} from '../../store/slices/FavoritesSlice';
import Breadcrumbs from './Breadcrumbs';
import OrderForm from './OrderForm';
import s from './SoloProduct.module.css';

const SoloProduct = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { data: product, isLoading } = shopAPI.useFetchProductQuery(id);

	const [like, setLike] = useState(false);

	const setFavorite = (product: IProduct) => {
		dispatch(addToFavorites(product));
		setLike(true);
	};

	const delFavorite = (product: IProduct) => {
		dispatch(removeFromFavorites(product));
		setLike(false);
	};
	return (
		<div className={s.product__wrapper_container}>
			<ToastContainer />

			<div className={s.product__wrapper}>
				<div className={s.product__about_container}>
					<div className={s.product__gallery}>
						<div className={s.product__gallery_desktop}>
							<div>
								{isLoading && <Loader />}
								<img src={product?.image} alt='img' />
							</div>
						</div>
					</div>

					<div className={s.product__form_container}>
						<div className={s.product__form}>
							<Breadcrumbs />

							<div className={s.product__title}>
								<h1>{product?.title}</h1>
								{like ? (
									<button onClick={() => delFavorite(product!)}>
										<img src={fullHeart} alt='liked' />
									</button>
								) : (
									<button onClick={() => setFavorite(product!)}>
										<img src={emptyHeart} alt='not-liked' />
									</button>
								)}
							</div>

							<div className={`${s.product__category} ${s.product__category_desc}`}>
								<span>ID: {product?.id} </span>
								<span>Category: {product?.category} </span>
								<span>Brand: Fox1k</span>
							</div>

							<div className={s.product__price}>{product?.price} $</div>

							<div
								className={`${
									s.product__category
								} ${'mt-[20px] text-[14px] flex flex-row items-center cursor-pointer'}`}
							>
								No bonus system
								<div className='w-[20px] h-[20px] ml-[5px] flex items-center'>
									<img src={info} alt='info' />
								</div>
							</div>

							<div className={s.product__see_wrapper}>
								<div className='w-[20px]'>
									<img src={eye} alt='eye' className='flex self-center' />
								</div>
								<div className={s.product__see}>1 person is currently viewing</div>
							</div>

							<OrderForm product={product!} />
						</div>
					</div>
				</div>
			</div>

			<div className={s.product__content_container}>
				<div className={s.product__description}>
					<div className={s.product__description_title}>description</div>
					<p>{product?.description}</p>
				</div>
			</div>
		</div>
	);
};

export default SoloProduct;
