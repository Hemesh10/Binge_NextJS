import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FreeMoviesData: [],
};

export const FreeMoviesReducers = createSlice({
  name: "freeMoviesSlice",
  initialState,
  reducers: {
    freeMovies: (state, action) => {
      state.FreeMoviesData = action.payload;
    },
  },
});

export const { freeMovies } = FreeMoviesReducers.actions;

export default FreeMoviesReducers.reducer;
