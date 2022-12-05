import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import picture1 from '../../assets/images/picture1.png';
import picture2 from '../../assets/images/picture2.png';
import facebook from '../../assets/svg/icons8-facebook.svg';
import telegram from '../../assets/svg/icons8-telegram-app.svg';
import { useAppDispatch } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { addToCart } from '../../store/slices/cartSlice';
import s from './SoloProduct.module.css';

interface OrderFormProps {
	product: IProduct;
}

const OrderForm = ({ product }: OrderFormProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleAddToCart = (product: IProduct) => {
		dispatch(addToCart(product));
	};

	return (
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
							navigate('/main');
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
						<Link to={'/'}>
							<div>
								<img src={picture1} alt='picture1' />
							</div>
							<span>blank</span>
						</Link>
					</div>
				</div>

				<div className={`${s.product__icon_button} ${s.product__form_item}`}>
					<div>
						<Link to={'/'}>
							<div>
								<img src={picture2} alt='picture2' />
							</div>
							<span>blank</span>
						</Link>
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
						<a target='_blank' rel='noreferrer' href='https://www.facebook.com/ '>
							<img src={facebook} alt='facebook' />
						</a>
					</div>
				</div>

				<div className={s.product__share_buttons}>
					<div>
						<a target='_blank' rel='noreferrer' href='https://web.telegram.org/k/'>
							<img src={telegram} alt='telegram' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderForm;
