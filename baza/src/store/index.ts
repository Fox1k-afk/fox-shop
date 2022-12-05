import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { shopAPI } from './services/ShopService';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
	reducer: {
		[shopAPI.reducerPath]: shopAPI.reducer,
		auth: authReducer,
		cart: cartReducer,
		favorites: favoritesReducer,
		modal: modalReducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(shopAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
