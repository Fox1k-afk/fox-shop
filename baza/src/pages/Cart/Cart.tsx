import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import emptyCart from '../../assets/svg/empty-cart.svg';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IProduct } from '../../models/IProduct';
import { clearCart } from '../../store/slices/cartSlice';
import s from './Cart.module.css';
import CartProduct from './CartProduct';

const Cart = () => {
	const navigate = useNavigate();
	const cart = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	const handleCearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className={s.cart__wrapper}>
			<ToastContainer />
			<div className={s.cart__content_container}>
				<div>
					<div className={s.cart__page_header}>
						<div>
							<div className={s.page_title}>
								<h1>cart$</h1>
							</div>
						</div>

						{cart.cartItems.length >= 1 && (
							<div className={s.cart__resest}>
								<button
									onClick={() => {
										handleCearCart();
									}}
								>
									Clear a cart
								</button>
							</div>
						)}
					</div>

					<div className={s.cart__products_container}>
						{cart.cartItems.length === 0 ? (
							<div className={s.cart__loader}>
								<div className={s.cart__empty_img}>
									<img src={emptyCart} alt='empty-cart' />
								</div>

								<div className={s.cart__no_products}>
									there are no items in the cart
								</div>

								<div>
									<button
										onClick={() => {
											navigate('/main');
										}}
										className={s.cart_button}
									>
										go to katalog
									</button>
								</div>
							</div>
						) : (
							<div className={s.cart__order_wrapper}>
								<div className={s.cart__order}>
									<div className={s.cart__positions}>
										{cart.cartItems.map((product: IProduct) => (
											<CartProduct key={product.id} product={product} />
										))}
									</div>

									<div className={s.cart__order_info}>
										<div className={s.cart__bonuses}>
											<div className={`${s.cart__info_label} ${'mb-0'}`}>Bonuses</div>

											<div className={s.cart__delivery_info}>No bonus system</div>

											<div className={s.cart__checkbox}>
												<div className={s.cart__godbless}>Godbless you</div>
											</div>
										</div>

										<div className={s.cart__total_price}>
											<div className={`${s.cart__info_label} ${'items-center'}`}>
												the amount of payment for the products
											</div>

											<div className={s.cart__price}>
												<div className={s.cart__price_wrapper}>
													{cart.cartTotalAmount.toFixed(2)} $
												</div>
											</div>
										</div>

										<div className={s.cart__delivery}>
											<div className={`${s.cart__info_label} ${'items-center'}`}>
												Delivery
											</div>

											<div className={s.cart__delivery_stopper}>
												<span>no delivery system, sorry</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
