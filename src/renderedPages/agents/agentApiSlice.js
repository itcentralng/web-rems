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
    updateAgent: builder.mutation({
      query: (values) => ({
        url: `/agent/${values.id}`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["Agent"],
    }),
    deleteAgent: builder.mutation({
      query: (parameter) => ({
        url: `/agent/${parameter}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Agent"],
    }),
    getSingleAgent: builder.query({
      query: (parameter) => `/agent/${parameter}`,
      providesTags: ["Agent"],
    }),
  }),
});

export const { useGetAgentsQuery, useCreateAgentMutation, useUpdateAgentMutation, useDeleteAgentMutation, useGetSingleAgentQuery } = agentApiSlice;
