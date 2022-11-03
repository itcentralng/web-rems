import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../renderedPages/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,

  prepareHeaders: (headers, { getState }) => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njc0OTE3MjYsImlhdCI6MTY2NzQ4MDU2Mywic3ViIjoxLCJyb2xlIjoiYWRtaW4ifQ.7r8_fsMuPkYEAk1WBf3R0wrwHSQf1abrr0W9cqq2Ln8"
    headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

const baseQuerywithAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // unauthorized
    api.dispatch(logout()); // logout user
    api.dispatch(apiSlice.util.resetApiState());
  }

  return result; //if everything is ok, return the result
};

export const apiSlice = createApi({
  baseQuery: baseQuerywithAuth,
  endpoints: (builder) => ({}),
});
