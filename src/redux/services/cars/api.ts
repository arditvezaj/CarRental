import { apiSlice } from "@/src/redux/services/api-slice";

export const api = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => "/cars",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Cars",
                id,
              })),
              { type: "Cars", id: "LIST" },
            ]
          : [{ type: "Cars", id: "LIST" }],
    }),
    createCar: builder.mutation({
      query: (body) => ({
        url: "/cars",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Cars", id: "LIST" }],
    }),
    getCarById: builder.query({
      query: (id) => ({ url: `/cars/${id}` }),
      providesTags: (result, error, id) => [{ type: "Cars", id }],
    }),
    updateCar: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/cars/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Cars", id }],
    }),
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Cars", id: "LIST" }],
    }),
    deleteCarImage: builder.mutation({
      query: (publicId) => ({
        url: `/cars/image/${publicId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Companies", id: "LIST" }],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useCreateCarMutation,
  useGetCarByIdQuery,
  useLazyGetCarsQuery,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useDeleteCarImageMutation,
} = api;
