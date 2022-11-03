import { apiSlice } from "../../api/apiSlice";

const apiSliceWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Agent"],
});

const dashboardApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getReport: builder.query({
      query: () => `/transaction/report`,
      providesTags: ["Report"],
    }),
  }),
});

export const { useGetReportQuery } = dashboardApiSlice;
