import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  OnAirTVData: [],
  OnAirTVActivePage: 1,
};

export const OnTheAirTVReducers = createSlice({
  name: "onAirTVSlice",
  initialState,
  reducers: {
    onAirTV: (state, action) => {
      state.OnAirTVData = action.payload;
    },
    changePage: (state, action) => {
      state.OnAirTVActivePage += action.payload;
    },
  },
});

export const { onAirTV, changePage } = OnTheAirTVReducers.actions;

export default OnTheAirTVReducers.reducer;
