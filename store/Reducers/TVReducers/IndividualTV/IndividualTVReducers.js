import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IndividualTVData: {},
  tvTrailerKeys: [],
  tvCastAndCrew: [],
  tvUserScore: 0,
};

export const IndividualTVReducers = createSlice({
  name: "individualTVSlice",
  initialState,
  reducers: {
    individualTV: (state, action) => {
      state.IndividualTVData = action.payload;
    },
    addTrailer: (state, action) => {
      state.tvTrailerKeys = action.payload;
    },
    castAndCrew: (state, action) => {
      state.tvCastAndCrew = action.payload;
    },
    userScore: (state, action) => {
      state.tvUserScore = action.payload;
    },
  },
});

export const { individualTV, addTrailer, userScore, castAndCrew } = IndividualTVReducers.actions;

export default IndividualTVReducers.reducer;
