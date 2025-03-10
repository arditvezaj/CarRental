import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

import * as SecureStore from "expo-secure-store";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

const baseUrl = "http://10.0.2.2:4040";

const baseQuery = fetchBaseQuery({
  baseUrl,
  // credentials: 'include',
  prepareHeaders: async (headers, { getState }) => {
    headers.set("accept", `*/*`);

    const token = await SecureStore.getItemAsync("access_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const mutex = new Mutex();

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = await SecureStore.getItemAsync("refresh_token");

        if (refreshToken) {
          const refreshResult: any = ({} = await baseQuery(
            {
              url: "/auth/refresh-token",
              method: "POST",
              body: { refresh_token: refreshToken },
            },
            api,
            extraOptions
          ));

          if (refreshResult.data) {
            await SecureStore.setItemAsync(
              "access_token",
              refreshResult.data.access_token
            );
            await SecureStore.setItemAsync(
              "refresh_token",
              refreshResult.data.refresh_token
            );

            result = await baseQuery(args, api, extraOptions);
          } else {
            if (refreshResult.error?.status === 401) {
              await SecureStore.deleteItemAsync("access_token");
              await SecureStore.deleteItemAsync("refresh_token");
            }
          }
        }
      } finally {
        release();
      }
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Users", "Cars", "Companies", "Roles", "UserProfile"],
  endpoints: (builder) => ({}),
});
