import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./modules/favorites/slice";

const store = configureStore({
  reducer: {
    favoriteCars: favoriteReducer,
  },
});

export default store;
