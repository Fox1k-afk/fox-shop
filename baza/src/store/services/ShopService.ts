import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../../models/IProduct';
import { IUser } from '../../models/IUser';

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
		sortProducts: build.query<IProduct[], any>({
			query: () => ({
				url: '/products?sort=desc',
			}),
		}),
		fetchUser: build.query<IUser | undefined, any>({
			query: () => ({
				url: '/users/1',
			}),
		}),
	}),
});
