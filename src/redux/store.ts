import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/api-slice";
import favoriteReducer from "./modules/favorites/slice";
import filtersReducer from "./modules/filters/slice";
import authReducer from "./modules/auth/slice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    favoriteCars: favoriteReducer,
    filtersReducer: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "api/executeQuery/fulfilled",
          "api/executeQuery/rejected",
        ],
        // Ignore these field paths in all actions
        ignoredActionPaths: [
          "meta.arg",
          "payload.timestamp",
          "meta.baseQueryMeta.request",
          "meta.baseQueryMeta.response",
        ],
        // Ignore these paths in the state
        ignoredPaths: ["api.queries"],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
