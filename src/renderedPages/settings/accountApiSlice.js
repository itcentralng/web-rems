import { apiSlice } from "../../api/apiSlice";

const apiSliceWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Tenant"],
});

const accountApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    // Account
    createAccount: builder.mutation({
      query: (values) => ({
        url: "/account",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["Account"],
    }),
    getAccount: builder.query({
      query: () => `/account`,
      providesTags: ["Account"],
    })
  }),
});

export const { useCreateAccountMutation, useGetAccountQuery } = accountApiSlice;
