import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
export interface favoritesState {
	favoriteItems: any[];
}

const item = localStorage.getItem('favoriteItems');

const initialState: favoritesState = {
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
	},
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
