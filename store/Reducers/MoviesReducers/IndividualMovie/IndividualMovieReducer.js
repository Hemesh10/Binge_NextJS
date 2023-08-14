import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IndividualMovieData: {},
  movieTrailerKeys: [],
  movieCastAndArew: [],
  movieUserScore: 0,
};

export const IndividualMovieReducers = createSlice({
  name: "individualMovieSlice",
  initialState,
  reducers: {
    individualMovie: (state, action) => {
      state.IndividualMovieData = action.payload;
    },
    addTrailer: (state, action) => {
      state.movieTrailerKeys = action.payload;
    },
    castAndCrew: (state, action) => {
      state.movieCastAndArew = action.payload;
    },
    userScore: (state, action) => {
      state.movieUserScore = action.payload;
    },
  },
});

export const { individualMovie, addTrailer, castAndCrew, userScore } =
  IndividualMovieReducers.actions;

export default IndividualMovieReducers.reducer;
