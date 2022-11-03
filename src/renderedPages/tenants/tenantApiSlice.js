import { apiSlice } from "../../api/apiSlice";

const apiSliceWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Tenant"],
});

const tenantApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useCreateTenantMutation, useUpdateTenantMutation, useDeleteTenantMutation, useGetTenantsQuery, useGetSingleTenantQuery } = tenantApiSlice;
