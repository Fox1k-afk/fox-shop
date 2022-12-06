import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginUser } from './ActionCreators';

interface IUserState {
	userToken: string | null;
	loginStatus: string;
	loginError: string;
	loggined?: boolean;
}
const initialState: IUserState = {
	userToken: localStorage.getItem('userToken'),
	loginStatus: '',
	loginError: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loadUser(state: any, action: PayloadAction) {
			const userToken = state.userToken;

			if (userToken) {
				return {
					...state,
					userToken,
					loggined: true,
				};
			}
		},

		logoutUser(state, action: PayloadAction) {
			localStorage.removeItem('userToken');
			return {
				...state,
				userToken: '',
				loginStatus: '',
				loginError: '',
				loggined: false,
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
					loggined: true,
				};
			} else return state;
		});

		builder.addCase(loginUser.rejected, (state, action) => {
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
