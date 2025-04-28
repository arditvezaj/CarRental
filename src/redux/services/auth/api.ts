import { apiSlice } from "@/src/redux/services/api-slice";

export const api = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    sendVerificationCode: builder.mutation({
      query: (body) => ({
        url: "/auth/send-verification",
        method: "POST",
        body,
      }),
    }),
    verifyCode: builder.mutation({
      query: (body) => ({
        url: "/auth/verify-code",
        method: "POST",
        body,
      }),
    }),
    getUser: builder.query({
      query: () => "/auth/profile",
      providesTags: ["UserProfile"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["UserProfile"],
    }),
    encryptPassword: builder.mutation({
      query: () => ({
        url: "/auth/encrypt-passwords",
        method: "Patch",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
  useEncryptPasswordMutation,
  useSendVerificationCodeMutation,
  useVerifyCodeMutation,
} = api;
