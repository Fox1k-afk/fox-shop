import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface favoritesState {
	favoriteItems: any[];
}

const initialState: favoritesState = {
	favoriteItems: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorites(state, action) {
			const favProd = { ...action.payload };
			state.favoriteItems.push(favProd);
			localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
		},
		removeFromFavorites(state, action) {
			const favDelItem = state.favoriteItems.filter(
				(favItem) => favItem.id !== action.payload.id
			);
			state.favoriteItems = favDelItem;
			localStorage.setItem('favoriteItems', JSON.stringify(state.favoriteItems));
		},
	},
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
