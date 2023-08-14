import {
  searchQueryData,
  totalPagesNumber,
} from "@/store/Reducers/HomePage/Search/SearchQueryReducers";
import axios from "axios";

export const asyncSearchQueryData =
  (search_query, activePage) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${search_query}&api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&page=${activePage}`
      );
      console.log(data);
      dispatch(searchQueryData(data.results));
      dispatch(totalPagesNumber(data.total_pages));
    } catch (error) {
      console.log(error);
    }
  };

// console.log(moviesData);
// console.log(TVData);
