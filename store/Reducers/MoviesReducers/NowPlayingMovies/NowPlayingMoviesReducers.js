import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NowPlayingMoviesData: [],
  NowPlayingMoviesActivePage: 1,
};

export const NowPlayingMoviesReducers = createSlice({
  name: "nowPlayingMoviesSlice",
  initialState,
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.NowPlayingMoviesData = action.payload;
    },
    changePage: (state, action) => {
      state.NowPlayingMoviesActivePage += action.payload;
    },
  },
});

export const { nowPlayingMovies, changePage } = NowPlayingMoviesReducers.actions;

export default NowPlayingMoviesReducers.reducer;
