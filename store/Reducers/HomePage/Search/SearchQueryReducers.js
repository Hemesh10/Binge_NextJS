import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQueryData: [],
  activePage: 1,
  totalPages: 0,
};

export const SearchQueryReducers = createSlice({
  name: "searchQuerySlice",
  initialState,
  reducers: {
    searchQueryData: (state, action) => {
      state.searchQueryData = action.payload;
    },
    changePage: (state, action) => {
      state.activePage += action.payload;
    },
    totalPagesNumber: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { searchQueryData, changePage, totalPagesNumber } = SearchQueryReducers.actions;

export default SearchQueryReducers.reducer;
