import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    brand: "All",
    priceFrom: "",
    priceTo: "",
    transmission: "All",
    fuel: "All",
    yearFrom: "",
    yearTo: "",
  },
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPriceFrom: (state, action) => {
      state.priceFrom = action.payload;
    },
    setPriceTo: (state, action) => {
      state.priceTo = action.payload;
    },
    setFuel: (state, action) => {
      state.fuel = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    setYearFrom: (state, action) => {
      state.yearFrom = action.payload;
    },
    setYearTo: (state, action) => {
      state.yearTo = action.payload;
    },
  },
});

export const {
  setBrand,
  setPriceFrom,
  setPriceTo,
  setFuel,
  setTransmission,
  setYearFrom,
  setYearTo,
} = filtersSlice.actions;
export default filtersSlice.reducer;
