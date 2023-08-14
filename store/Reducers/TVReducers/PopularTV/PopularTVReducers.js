import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PopularTVData: [],
  PopularTVActivePage: 1,
};

export const PopularTVReducers = createSlice({
  name: "popularTVSlice",
  initialState,
  reducers: {
    popularTV: (state, action) => {
      state.PopularTVData = action.payload;
    },
    changePage: (state, action) => {
        state.PopularTVActivePage += action.payload
    }
  },
});

export const { popularTV, changePage } = PopularTVReducers.actions;

export default PopularTVReducers.reducer;
