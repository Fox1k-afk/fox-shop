import { createSlice } from '@reduxjs/toolkit';

import { loginUser } from './ActionCreators';

interface UserState {
	userToken: string | null;
	loginStatus: string;
	loginError: string;
	userLoaded: boolean;
}
const initialState: UserState = {
	userToken: localStorage.getItem('userToken'),
	loginStatus: '',
	loginError: '',
	userLoaded: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loadUser(state, action): any {
			const userToken = state.userToken;

			if (userToken) {
				return {
					...state,
					userToken,
					userLoaded: true,
					Loggined: true,
				};
			}
		},

		logoutUser(state, action): any {
			localStorage.removeItem('userToken');
			return {
				...state,
				userToken: '',
				loginStatus: '',
				loginError: '',
				userLoaded: false,
				Loggined: false,
			};
		},
	},

	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state, action) => {
			return { ...state, loginStatus: 'pending' };
		});

		builder.addCase(loginUser.fulfilled, (state, action) => {
			if (action.payload) {
				return {
					...state,
					userToken: action.payload,
					loginStatus: 'success',
					userLoaded: true,
					Loggined: true,
				};
			} else return state;
		});

		builder.addCase(loginUser.rejected, (state, action: any) => {
			return {
				...state,
				loginStatus: 'rejected',
				loginError: action.payload,
			};
		});
	},
});

export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
