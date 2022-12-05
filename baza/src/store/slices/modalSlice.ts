import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface IModalSlice {
	isOpen: boolean;
}
const initialState = {
	search: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction) => {
			state.search = true;
		},

		closeModal: (state, action: PayloadAction) => {
			state.search = false;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
