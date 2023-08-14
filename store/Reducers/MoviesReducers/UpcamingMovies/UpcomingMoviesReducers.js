import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UpcomingMoviesData: [],
  UpcomingMoviesActivePage: 1,
};

export const UpcomingMoviesReducers = createSlice({
  name: "upcomingMoviesSlice",
  initialState,
  reducers: {
    upcomingMovies: (state, action) => {
      state.UpcomingMoviesData = action.payload;
    },
    changePage: (state, action) => {
      state.UpcomingMoviesActivePage += action.payload;
    },
  },
});

export const { upcomingMovies, changePage } = UpcomingMoviesReducers.actions;

export default UpcomingMoviesReducers.reducer;
