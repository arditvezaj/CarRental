import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    make: "All",
    model: "All",
    priceFrom: "",
    priceTo: "",
    transmission: "All",
    fuel: "All",
    yearFrom: "",
    yearTo: "",
  },
  reducers: {
    setMake: (state, action) => {
      state.make = action.payload;
    },
    setModel: (state, action) => {
      state.model = action.payload;
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
  setMake,
  setModel,
  setPriceFrom,
  setPriceTo,
  setFuel,
  setTransmission,
  setYearFrom,
  setYearTo,
} = filtersSlice.actions;
export default filtersSlice.reducer;
