import React from 'react';
import { Link } from 'react-router-dom';
import s from './pagesStyles/Cart.module.css';
import trash from '../assets/svg/trash.svg';
import { IProduct } from '../models/IProduct';
import { useAppDispatch } from '../hooks/redux';
import {
	addToCart,
	decreaseCart,
	removeFromCart,
} from '../store/slices/cartSlice';

interface CartProductProps {
	product: IProduct;
}

const CartProduct = ({ product }: CartProductProps) => {
	const dispatch = useAppDispatch();

	const handleRemoveFromCart = (product: IProduct) => {
		dispatch(removeFromCart(product));
	};

	const handleDecreaseCart = (product: IProduct) => {
		dispatch(decreaseCart(product));
	};

	const handleIncreaseCart = (product: IProduct) => {
		dispatch(addToCart(product));
	};
	return (
		<div className={s.cart__position}>
			<div className={s.cart__product}>
				<div className={s.cart__product_img}>
					<img src={product.image} alt={product.description} />
				</div>

				<div className={s.cart__product_info}>
					<div>
						<Link to='/product:id'>
							<span className={s.cart__product_title}>{product.title}</span>
						</Link>
					</div>

					<div className={s.cart__product_artikul}>{product.category}</div>

					<div className={s.cart__product_size}>rate: {product.rating.rate} </div>
				</div>
			</div>

			<div className={s.cart__order_data}>
				<div className={s.cart__quantity}>
					<button onClick={() => handleIncreaseCart(product)}>+</button>

					<span>{product.cartQuantity}</span>

					<button onClick={() => handleDecreaseCart(product)}>-</button>
				</div>

				<div className={s.cart__price}>
					{(product.price * product.cartQuantity!).toFixed(2)} $
				</div>

				<button
					onClick={() => handleRemoveFromCart(product)}
					className={s.cart__delete}
				>
					<img src={trash} alt='trash' />
				</button>
			</div>
		</div>
	);
};

export default CartProduct;
