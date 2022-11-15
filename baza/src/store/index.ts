import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { shopAPI } from '../services/ShopService';

export const store = configureStore({
	reducer: {
		[shopAPI.reducerPath]: shopAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(shopAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
