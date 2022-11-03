import { apiSlice } from "../../api/apiSlice";

const apiSliceWithTags = apiSlice.enhanceEndpoints({
  addTagTypes: ["Agent"],
});

const agentApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getAgents: builder.query({
      query: () => `/agents`,
      providesTags: ["Agent"],
    }),
    createAgent: builder.mutation({
      query: (values) => ({
        url: "/agent",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["Agent"],
    }),
    getSingleAgent: builder.query({
      query: (parameter) => `/agent/${parameter}`,
      providesTags: ["Agent"],
    }),
  }),
});

export const { useGetAgentsQuery, useCreateAgentMutation, useGetSingleAgentQuery } = agentApiSlice;
