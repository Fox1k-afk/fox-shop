import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
	'auth/loginUser',
	async (values: any, { rejectWithValue }) => {
		try {
			const res = await axios.post('https://fakestoreapi.com/auth/login', {
				username: values.username,
				password: values.password,
			});

			localStorage.setItem('userToken', res.data.token);

			return res.data.token;
		} catch (err) {
			if (err instanceof Error) {
				console.log(err.message);
				return rejectWithValue(err.message);
			}
		}
	}
);
