import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import eye from '../assets/images/eye.png';
import picture1 from '../assets/images/picture1.png';
import picture2 from '../assets/images/picture2.png';
import emptyhHeart from '../assets/svg/emptyheart.svg';
import fulHeart from '../assets/svg/fullheart.svg';
import facebook from '../assets/svg/icons8-facebook.svg';
import telegram from '../assets/svg/icons8-telegram-app.svg';
import info from '../assets/svg/info.svg';
import Loader from '../components/Loader';
import { useAppDispatch } from '../hooks/redux';
import { IProduct } from '../models/IProduct';
import { shopAPI } from '../store/services/ShopService';
import { addToCart } from '../store/slices/cartSlice';
import s from './pagesStyles/SoloProduct.module.css';

const SoloProduct = () => {
	const { id } = useParams();
	const { data: product, isLoading, isError } = shopAPI.useFetchProductQuery(id);

	const navigate = useNavigate();
	const [like, setLike] = useState(false);
	const dispatch = useAppDispatch();

	const handleAddToCart = (product: IProduct) => {
		dispatch(addToCart(product));
	};
	return (
		<div className={s.product__wrapper_container}>
			<ToastContainer />
			{isLoading && <Loader />}
			<div className={s.product__wrapper}>
				<div className={s.product__about_container}>
					<div className={s.product__gallery}>
						<div className={s.product__gallery_desktop}>
							<div>
								<img src={product?.image} alt='img' />
							</div>
						</div>
					</div>

					<div className={s.product__form_container}>
						<div className={s.product__form}>
							<div className={s.breadcrumbs}>
								<div className={`${s.breadcrumbs__link} ${s.breadcrumbs__link_after}`}>
									<Link to={'/parnyam'}>Store</Link>
								</div>

								<div className={`${s.breadcrumbs__link} ${s.breadcrumbs__link_after}`}>
									<Link to={'/parnyam'}>blank</Link>
								</div>

								<div className={`${s.breadcrumbs__link} ${s.breadcrumbs__link_after}`}>
									<Link to={'/parnyam'}>blank</Link>
								</div>

								<div className={`${s.breadcrumbs__link} ${s.breadcrumbs__link_after}`}>
									<Link to={'/parnyam'}>blank</Link>
								</div>

								<div className={s.breadcrumbs__link}>
									<Link to={'/parnyam'}>current</Link>
								</div>
							</div>

							<div className={s.product__title}>
								<h1>{product?.title}</h1>
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

							<div className={s.product__order_form}>
								<div className={s.product__order_form_sizes}>
									<div className={`${s.product__label} ${s.product__label_sizes}`}>
										Some interesting info
									</div>

									<div className={s.product__sizes_container}>
										<div className={`${s.product__sizes} ${s.product__form_item}`}>
											<button>$</button>
											<button>%</button>
											<button>^</button>
											<button>&</button>
											<button>!</button>
											<button>@</button>
										</div>
									</div>
								</div>

								<div className={s.product__order_buttons}>
									<div className={s.product__order_button}>
										<button
											onClick={() => handleAddToCart(product!)}
											className={`${s.main_button} ${'bg-green-800 text-white'}`}
										>
											Add to cart
										</button>
									</div>

									<div className={s.product__order_button}>
										<button
											onClick={() => {
												navigate('/parnyam');
											}}
											className={`${s.main_button} ${'bg-gray-300 text-black'}`}
										>
											continue shopping
										</button>
									</div>
								</div>

								<div className={s.product__delivery}>
									<div className={`${s.product__icon_button} ${s.product__form_item}`}>
										<div>
											<a href='/'>
												<div>
													<img src={picture1} alt='picture1' />
												</div>
												<span>blank</span>
											</a>
										</div>
									</div>

									<div className={`${s.product__icon_button} ${s.product__form_item}`}>
										<div>
											<a href='/'>
												<div>
													<img src={picture2} alt='picture2' />
												</div>
												<span>blank</span>
											</a>
										</div>
									</div>
								</div>

								<div className={`${s.product__category} ${s.product__category_mob}`}>
									<span>{product?.id}</span>
									<span>{product?.category}</span>
									<span>Brand: Fox1k</span>
								</div>

								<div className={s.product__share}>
									<div className={s.product__label}>Share</div>

									<div className={s.product__share_buttons}>
										<div>
											<a
												target='_blank'
												rel='noreferrer'
												href='https://www.facebook.com/ '
											>
												<img src={facebook} alt='facebook' />
											</a>
										</div>
									</div>

									<div className={s.product__share_buttons}>
										<div>
											<a
												target='_blank'
												rel='noreferrer'
												href='https://web.telegram.org/k/'
											>
												<img src={telegram} alt='telegram' />
											</a>
										</div>
									</div>
								</div>
							</div>
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
