import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export interface cartState {
	cartItems: any[];
	cartTotalQuantity: number;
	cartTotalAmount: number;
}

const item = localStorage.getItem('cartItems');

const initialState: cartState = {
	cartItems: item ? JSON.parse(item) : [],
	cartTotalQuantity: 0,
	cartTotalAmount: 0,
};

const cartSLice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemIndex >= 0) {
				state.cartItems[itemIndex].cartQuantity += 1;

				toast.info(`increased ${state.cartItems[itemIndex].title} cart quantity`, {
					position: 'bottom-left',
				});
			} else {
				const tempProduct = { ...action.payload, cartQuantity: 1 };
				state.cartItems.push(tempProduct);

				toast.success(`${action.payload.title} *** added to cart`, {
					position: 'bottom-left',
					pauseOnHover: true,
				});
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},

		removeFromCart(state, action) {
			const nextCartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== action.payload.id
			);
			state.cartItems = nextCartItems;
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

			toast.error(`${action.payload.title} *** removed from cart`, {
				position: 'bottom-left',
			});
		},

		decreaseCart(state, action) {
			const itemIndex = state.cartItems.findIndex(
				(cartItem) => cartItem.id === action.payload.id
			);
			if (state.cartItems[itemIndex].cartQuantity > 1) {
				state.cartItems[itemIndex].cartQuantity -= 1;

				toast.info(`Decreased ${action.payload.title} cart quantity`, {
					position: 'bottom-left',
				});
			} else if (state.cartItems[itemIndex].cartQuantity === 1) {
				const nextCartItems = state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				);
				state.cartItems = nextCartItems;

				toast.error(`${action.payload.title} *** removed from cart`, {
					position: 'bottom-left',
				});
			}
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},

		clearCart(state, action: PayloadAction) {
			state.cartItems = [];

			toast.error(`Cart cleared`, {
				position: 'bottom-left',
			});
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},

		getTotals(state, action: PayloadAction) {
			let { total, quantity } = state.cartItems.reduce(
				(cartTotal, cartItem) => {
					const { price, cartQuantity } = cartItem;
					const itemTotal = price * cartQuantity;

					cartTotal.total += itemTotal;
					cartTotal.quantity += cartQuantity;

					return cartTotal;
				},
				{
					total: 0,
					quantity: 0,
				}
			);

			state.cartTotalQuantity = quantity;
			state.cartTotalAmount = total;
		},
	},
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
	cartSLice.actions;

export default cartSLice.reducer;
