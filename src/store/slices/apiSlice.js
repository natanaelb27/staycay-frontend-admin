import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'databaseApi',
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: [
    'Houses',
    'Cities',
    'Users',
    'Pickups',
    'HouseStatuses',
  ],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: { email, password },
      }),
      invalidatesTags: ['Users'],
    }),
    getHouse: builder.query({
      query: ({
        filterHouseName,
        filterCity,
        filterCheckInDate,
        filterCheckOutDate,
        sortBy,
        sort,
        limit,
        page,
      }) => ({
        url: `/house?searchName=${filterHouseName}&searchCity=${filterCity}&searchCheckInDate=${filterCheckInDate}&searchCheckOutDate=${filterCheckOutDate}&sortBy=${sortBy}&sort=${sort}&limit=${limit}&page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Houses'],
    }),
    getUnscopedHouseByID: builder.query({
      query: (houseID) => ({
        url: `/house/unscoped/${parseInt(houseID, 10)}`,
        method: 'GET',
      }),
      providesTags: ['Houses'],
    }),
    getUserByID: builder.query({
      query: (userID) => ({
        url: `/user/${userID}`,
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    getCity: builder.query({
      query: () => ({
        url: '/city',
        method: 'GET',
      }),
      providesTags: ['Cities'],
    }),
    getHouseByID: builder.query({
      query: (houseID) => ({
        url: `/house/${parseInt(houseID, 10)}`,
        method: 'GET',
      }),
      providesTags: ['Houses'],
    }),
    getPickupByReservation: builder.query({
      query: (reservationID) => ({
        url: `/pickup/reservation/${reservationID}`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('admin'))?.token ? JSON.parse(localStorage.getItem('admin'))?.token : ''}`,
        },
      }),
      providesTags: ['Pickups'],
    }),
    updateHouseByID: builder.mutation({
      query: ({
        houseID,
        name,
        price,
        description,
        cityID,
        maxGuest,
        houseStatusID,
      }) => ({
        url: `/host/house/${houseID}`,
        method: 'PATCH',
        body: {
          name,
          price: parseInt(price, 10),
          description,
          city_id: parseInt(cityID, 10),
          max_guest: parseInt(maxGuest, 10),
          house_status_id: parseInt(houseStatusID, 10),
        },
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('admin'))?.token ? JSON.parse(localStorage.getItem('admin'))?.token : ''}`,
        },
      }),
      invalidatesTags: ['Houses'],
    }),
    deleteHouse: builder.mutation({
      query: (houseID) => ({
        url: `/host/house/${houseID}`,
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('admin'))?.token ? JSON.parse(localStorage.getItem('admin'))?.token : ''}`,
        },
      }),
      invalidatesTags: ['Houses'],
    }),
    getHouseStatuses: builder.query({
      query: () => ({
        url: '/house/status',
        method: 'GET',
      }),
      providesTags: ['HouseStatuses'],
    }),
    getReservationByID: builder.query({
      query: (reservationID) => ({
        url: `/reservation/${reservationID}`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('admin'))?.token ? JSON.parse(localStorage.getItem('admin'))?.token : ''}`,
        },
      }),
      providesTags: ['Reservations'],
    }),
    getPickupStatuses: builder.query({
      query: () => ({
        url: '/pickup/status',
        method: 'GET',
      }),
      providesTags: ['PickupStatuses'],
    }),
    getPickupDetails: builder.query({
      query: ({
        filterPickupStatusName,
        filterReservationCode,
        limit,
        page,
      }) => ({
        url: `/pickup?filterPickupStatusName=${filterPickupStatusName}&filterReservationCode=${filterReservationCode}&limit=${limit}&page=${page}`,
        method: 'GET',
      }),
      providesTags: ['Pickups'],
    }),
    updatePickupStatus: builder.mutation({
      query: ({
        pickupID,
        pickupStatusID,
      }) => ({
        url: `/admin/pickup/${pickupID}`,
        method: 'PATCH',
        body: {
          pickup_status_id: parseInt(pickupStatusID, 10),
        },
        headers: {
          authorization: `Bearer ${JSON.parse(localStorage.getItem('admin'))?.token ? JSON.parse(localStorage.getItem('admin'))?.token : ''}`,
        },
      }),
      invalidatesTags: ['Pickups'],
    }),
  }),
});

export const {
  useLoginMutation,
  useLazyGetHouseQuery,
  useGetUnscopedHouseByIDQuery,
  useGetCityQuery,
  useGetHouseByIDQuery,
  useGetUserByIDQuery,
  useGetPickupByReservationQuery,
  useDeleteHouseMutation,
  useUpdateHouseByIDMutation,
  useGetHouseStatusesQuery,
  useGetReservationByIDQuery,
  useGetPickupStatusesQuery,
  useLazyGetPickupDetailsQuery,
  useUpdatePickupStatusMutation,
} = apiSlice;
