import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterHouseName: '',
  filterCity: 0,
  filterCheckInDate: '',
  filterCheckOutDate: '',
};

export const filterHouseSlice = createSlice({
  name: 'FilterHouse',
  initialState,
  reducers: {
    setFilterHouse: (state, action) => ({
      ...state,
      filterHouseName: action.payload.houseName,
      filterCity: action.payload.city,
      filterCheckInDate: action.payload.checkInDate,
      filterCheckOutDate: action.payload.checkOutDate,
    }),
  },
});

export const {
  setFilterHouse,
} = filterHouseSlice.actions;
export default filterHouseSlice.reducer;
