import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { shopAPI } from './services/ShopService';
import authReducer from './slices/AuthSlice';
import cartReducer from './slices/CartSlice';
import favoritesReducer from './slices/FavoritesSlice';

export const store = configureStore({
	reducer: {
		[shopAPI.reducerPath]: shopAPI.reducer,
		auth: authReducer,
		cart: cartReducer,
		favorites: favoritesReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(shopAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
