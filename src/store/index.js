import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import filterHouseReducer from './slices/filterHouseSlice';

const store = configureStore({
  reducer: {
    FilterHouse: filterHouseReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    apiSlice.middleware,
  ),
});

export default store;
