import {
  individualTV,
  addTrailer,
  castAndCrew,
  userScore,
} from "@/store/Reducers/TVReducers/IndividualTV/IndividualTVReducers";
import axios from "axios";

export const asyncIndividualTV = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`
    );
    dispatch(individualTV(data));

    // const response = await fetch(
    //   `https://api.themoviedb.org/3/tv/${id}?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2&append_to_response=videos`,
    //   { cache: "no-store" }
    // ).then((res) => res.json());
    // dispatch(individualTV(response));

    dispatch(
      addTrailer(
        data.videos.results
          .map((elem) => (elem.type === "Trailer" ? elem.key : false))
          .filter(Boolean)
      )
    );
    dispatch(userScore(Math.floor(data.vote_average * 10)));

    // console.log(data.videos.results);
    // console.log(getState().IndividualTVReducers);

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const asyncIndividualTVCastAndCrew =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=6bd862bb6372fb6e6174ebc27cc7d8e2`
      );
      dispatch(castAndCrew(data.cast.slice(0, 10)));
    } catch (error) {
      console.log(error);
    }
  };
