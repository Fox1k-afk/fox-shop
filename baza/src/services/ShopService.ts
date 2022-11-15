import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../models/IProduct';

export const shopAPI = createApi({
	reducerPath: 'shopAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
	endpoints: (build) => ({
		fetchAllProducts: build.query<IProduct[], number>({
			query: (limit: number = 5) => ({
				url: `/products`,
				params: {
					limit: limit,
				},
			}),
		}),
	}),
});
