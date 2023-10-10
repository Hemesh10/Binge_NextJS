import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearchBar: false,
  searchQueries: "",
  searchBarDynamicResults: [],
};

export const SearchBarReducer = createSlice({
  name: "searchBarReducer",
  initialState,
  reducers: {
    changeSearchBarState: (state, action) => {
      state.showSearchBar = action.payload;
    },
    setSearchQueries: (state, action) => {
      state.searchQueries = action.payload;
    },
    dynamicSearchResults: (state, action) => {
      state.searchBarDynamicResults = action.payload;
    },
  },
});

export const { changeSearchBarState, setSearchQueries, dynamicSearchResults } =
  SearchBarReducer.actions;

export default SearchBarReducer.reducer;
