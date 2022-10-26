import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toastSuccess: '',
  toastError: '',
};

export const toastSlice = createSlice({
  name: 'Toast',
  initialState,
  reducers: {
    setToast: (state, action) => ({
      ...state,
      toastSuccess: action.payload.toastSuccess,
      toastError: action.payload.toastError,
    }),
  },
});

export const {
  setToast,
} = toastSlice.actions;
export default toastSlice.reducer;
