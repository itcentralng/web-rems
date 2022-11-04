import { apiSlice } from "../../api/apiSlice";

const apiSliceWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Tenant"],
});

const tenantApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    // Tenant
    createTenant: builder.mutation({
      query: (values) => ({
        url: "/tenant",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["Tenant"],
    }),
    updateTenant: builder.mutation({
      query: (values) => ({
        url: `/tenant/${values.id}`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["Tenant"],
    }),
    deleteTenant: builder.mutation({
      query: (parameter) => ({
        url: `/tenant/${parameter}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tenant"],
    }),
    getTenants: builder.query({
      query: () => `/tenants`,
      providesTags: ["Tenant"],
    }),
    getSingleTenant: builder.query({
      query: (parameter) => `/tenant/${parameter}`,
      providesTags: ["Tenant"],
    }),

    // Tenant Transactions
    createTransaction: builder.mutation({
      query: (values) => ({
        url: "/transaction",
        method: "POST",
        body: { ...values },
      }),
    }),
    updateTransaction: builder.mutation({
      query: (values) => ({
        url: `/transaction/${values.id}`,
        method: "PUT",
        body: { ...values },
      }),
    }),
    deleteTransaction: builder.mutation({
      query: (parameter) => ({
        url: `/transaction/${parameter}`,
        method: "DELETE",
      }),
    }),
    getTransactions: builder.query({
      query: () => `/transactions`,
    }),
    getSingleTransaction: builder.query({
      query: (parameter) => `/transaction/${parameter}`,
    }),
  }),
});

export const { useCreateTenantMutation, useUpdateTenantMutation, useDeleteTenantMutation, useGetTenantsQuery, useGetSingleTenantQuery, useCreateTransactionMutation, useUpdateTransactionMutation, useDeleteTransactionMutation, useGetTransactionsQuery, useGetSingleTransactionQuery } = tenantApiSlice;
