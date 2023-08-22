import { dynamicSearchResults } from "@/store/Reducers/HomePage/SearchBar/SearchBarReducer";
import axios from "axios";

export const asyncDynamicSearchResults = () => async (dispatch, getState) => {
  const { searchQueries } = getState().SearchBarReducer;
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&query=${searchQueries}`
  );
  dispatch(dynamicSearchResults(data.results))
};
