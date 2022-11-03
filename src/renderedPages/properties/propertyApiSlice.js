import { apiSlice } from "../../api/apiSlice";

const apiSliceWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Property"],
});

const propertyApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => `/properties`,
      providesTags: ["Property"],
    }),
    getPropertiesByType: builder.query({
      query: (parameter) => `/property?type=${parameter}`,
      providesTags: ["Property"],
    }),
    getSingleProperty: builder.query({
      query: (parameter) => `/property/${parameter}`,
      providesTags: ["Property"],
    }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertiesByTypeQuery, useGetSinglePropertyQuery } = propertyApiSlice;
