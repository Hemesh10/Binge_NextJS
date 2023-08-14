import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PopularMoviesData: [],
  PopularMoviesActivePage: 1,
};

export const PopularMoviesReducer = createSlice({
  name: "popularMoviesSlice",
  initialState,
  reducers: {
    popularMovies: (state, action) => {
      state.PopularMoviesData = action.payload;
    },
    changePage: (state, action) => {
      state.PopularMoviesActivePage += action.payload;
    },
  },
});

export const { popularMovies, changePage } = PopularMoviesReducer.actions;

export default PopularMoviesReducer.reducer;
