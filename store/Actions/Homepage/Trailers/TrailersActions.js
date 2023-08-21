import { getTrailerData } from "@/store/Reducers/HomePage/Trailers/TrailersReducers";
import axios from "axios";

export const asyncGetTrailerData = () => async (dispatch, getState) => {
  const { IDsForTrailers } = getState().TrailersReducers;
  if (IDsForTrailers.length > 0) {
    IDsForTrailers.forEach(async (elem) => {
      if (elem.media_type === "movie") {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${elem.id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`
        );
        const { title, poster_path, backdrop_path, videos } = data;
        dispatch(
          getTrailerData([title, poster_path, backdrop_path, videos.results[0].key])
        );
      } else {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/tv/${elem.id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`
        );
        const { name, poster_path, backdrop_path, videos } = data;
        dispatch(
          getTrailerData([name, poster_path, backdrop_path, videos.results[0].key])
        );
      }
    });
  }
};