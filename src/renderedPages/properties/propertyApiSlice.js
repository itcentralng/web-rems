import { apiSlice } from "../../api/apiSlice";

const apiSliceWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Property"],
});

const propertyApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    createProperty: builder.mutation({
      query: (values) => ({
        url: "/property",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["Property"],
    }),
    updateProperty: builder.mutation({
      query: (values) => ({
        url: `/property/${values.id}`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["Property"],
    }),
    deleteProperty: builder.mutation({
      query: (parameter) => ({
        url: `/property/${parameter}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Property"],
    }),
    getProperties: builder.query({
      query: () => `/properties`,
      providesTags: ["Property"],
    }),
    getPropertyListing: builder.query({
      query: () => `/properties?type=listed`,
      providesTags: ["Property"],
    }),
    getSingleProperty: builder.query({
      query: (parameter) => `/property/${parameter}`,
      providesTags: ["Property"],
    }),
    // UNITS
    createUnit: builder.mutation({
      query: (values) => ({
        url: "/unit",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["Property"],
    }),
    updateUnit: builder.mutation({
      query: (values) => ({
        url: `/unit/${values.id}`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["Property"],
    }),
    deleteUnit: builder.mutation({
      query: (parameter) => ({
        url: `/unit/${parameter}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Property"],
    }),
    getUnits: builder.query({
      query: () => `/units`,
      providesTags: ["Property"],
    }),
    getSingleUnit: builder.query({
      query: (parameter) => `/unit/${parameter}`,
      providesTags: ["Property"],
    }),
  }),
});

export const { useCreatePropertyMutation, useUpdatePropertyMutation, useDeletePropertyMutation, useGetPropertiesQuery, useGetPropertyListingQuery, useGetSinglePropertyQuery, useCreateUnitMutation, useUpdateUnitMutation, useDeleteUnitMutation, useGetUnitsQuery, useGetSingleUnitQuery } = propertyApiSlice;
