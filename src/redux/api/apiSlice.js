// src/redux/api/apiSlice.js
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://demo.thelittlehands.in/api'}),
  endpoints: builder => ({
    getUsps: builder.query({query: () => '/usps'}),
    getBanners: builder.query({query: () => '/banners'}),
    getBlogs: builder.query({query: () => '/blogs'}),
    getEvents: builder.query({query: () => '/events'}),
    getCategorys: builder.query({query: () => '/categorys'}),
  }),
});

export const {
  useGetUspsQuery,
  useGetBannersQuery,
  useGetBlogsQuery,
  useGetEventsQuery,
  useGetCategorysQuery,
} = appApi;
