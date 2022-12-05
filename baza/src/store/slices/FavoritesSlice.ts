import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IProduct } from '../../models/IProduct';
export interface IFavoritesState {
	favoriteItems: IProduct[];
}

const item = localStorage.getItem('favoriteItems');

const initialState: IFavoritesState = {
	favoriteItems: item ? JSON.parse(item) : [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites(state, action) {
			const favProd = { ...action.payload };
			state.favoriteItems.push(favProd);

			localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));

			toast.success(`${favProd.title} added to favorites`, {
				position: 'bottom-left',
			});
		},

		removeFromFavorites(state, action) {
			const favDelItem = state.favoriteItems.filter(
				(favItem) => favItem.id !== action.payload.id
			);
			state.favoriteItems = favDelItem;
			localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));

			toast.warning(`${action.payload.title} removed from favorites`, {
				position: 'bottom-left',
			});
		},

		clearFavorites(state, action: PayloadAction) {
			state.favoriteItems = [];

			toast.error(`Favorites cleared`, {
				position: 'bottom-left',
			});
			localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
		},
	},
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
	favoritesSlice.actions;

export default favoritesSlice.reducer;
