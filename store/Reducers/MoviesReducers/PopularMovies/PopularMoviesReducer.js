import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PopularMoviesData: [],
  PopularMoviesActivePage: 1,
  sort_by: "popularity.desc",
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
    sort: (state, action) => {
      state.sort_by = action.payload;
    },
  },
});

export const { popularMovies, changePage, sort } = PopularMoviesReducer.actions;

export default PopularMoviesReducer.reducer;
