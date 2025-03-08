import { apiSlice } from "@/src/redux/services/api-slice";

export const api = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    checkEmail: builder.query({
      query: (email) => ({
        url: `/users/check-email`,
        params: { email },
      }),
    }),
    getUsers: builder.query({
      query: () => "/users",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Users",
                id,
              })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    createWorker: builder.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    getWorkerById: builder.query({
      query: (id) => ({ url: `/users/${id}` }),
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    updateWorker: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Users", id }],
    }),
    deleteWorker: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    deleteWorkerImage: builder.mutation({
      query: (publicId) => ({
        url: `/users/image/${publicId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Companies", id: "LIST" }],
    }),
  }),
});

export const {
  useLazyCheckEmailQuery,
  useGetUsersQuery,
  useCreateWorkerMutation,
  useGetWorkerByIdQuery,
  useLazyGetUsersQuery,
  useUpdateWorkerMutation,
  useDeleteWorkerMutation,
  useDeleteWorkerImageMutation,
} = api;
