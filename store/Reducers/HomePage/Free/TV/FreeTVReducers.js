import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FreeTVData: [],
};

export const FreeTVReducers = createSlice({
  name: "freeTVSlice",
  initialState,
  reducers: {
    freeTV: (state, action) => {
      state.FreeTVData = action.payload;
    },
  },
});

export const { freeTV } = FreeTVReducers.actions;

export default FreeTVReducers.reducer;
