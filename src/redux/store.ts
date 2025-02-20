import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./modules/favorites/slice";
import filtersReducer from "./modules/filters/slice";

const store = configureStore({
  reducer: {
    favoriteCars: favoriteReducer,
    filtersReducer: filtersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;