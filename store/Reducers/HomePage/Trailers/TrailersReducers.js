import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IDsForTrailers: [],
  individualDataForTrailer: [],
};

export const TrailersReducers = createSlice({
  name: "trailerArr",
  initialState,
  reducers: {
    getIDS: (state, action) => {
      state.IDsForTrailers = action.payload;
    },
    getTrailerData: (state, action) => {
      state.individualDataForTrailer = action.payload;
    },
  },
});

export const { getTrailerData, getIDS } = TrailersReducers.actions;

export default TrailersReducers.reducer;
