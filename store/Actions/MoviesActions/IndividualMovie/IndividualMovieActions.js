import {
  individualMovie,
  addTrailer,
  castAndCrew,
  userScore,
} from "@/store/Reducers/MoviesReducers/IndividualMovie/IndividualMovieReducer";
import axios from "axios";

export const asyncIndividualMovie = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`
    );
    dispatch(individualMovie(data));
    dispatch(
      addTrailer(
        data.videos.results
          .map((elem) => (elem.type === "Trailer" ? elem.key : false))
          .filter(Boolean)
      )
    );
    dispatch(userScore(Math.floor(data.vote_average * 10)));
  } catch (error) {
    console.log(error);
  }
};

export const asyncIndividualMovieCastAndCrew =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2`
      );
      dispatch(castAndCrew(data.cast.slice(0, 10)));
      // console.log(data.cast.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };
