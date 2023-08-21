import { configureStore } from "@reduxjs/toolkit";
import SearchBarReducer from "./Reducers/HomePage/SearchBar/SearchBarReducer";
import TrendingReducer from "./Reducers/HomePage/Trending/TrendingReducer";
import FreeMoviesReducers from "./Reducers/HomePage/Free/Movies/FreeMoviesReducers";
import TrailersReducers from "./Reducers/HomePage/Trailers/TrailersReducers";
import FreeTVReducers from "./Reducers/HomePage/Free/TV/FreeTVReducers";
import SearchQueryReducers from "./Reducers/HomePage/Search/SearchQueryReducers";
import IndividualMovieReducers from "./Reducers/MoviesReducers/IndividualMovie/IndividualMovieReducer";
import PopularMoviesReducer from "./Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";
import NowPlayingMoviesReducers from "./Reducers/MoviesReducers/NowPlayingMovies/NowPlayingMoviesReducers";
import TopRatedMoviesReducers from "./Reducers/MoviesReducers/TopRatedMovies/TopRatedMoviesReducers";
import UpcomingMoviesReducers from "./Reducers/MoviesReducers/UpcamingMovies/UpcomingMoviesReducers";
import IndividualTVReducers from "./Reducers/TVReducers/IndividualTV/IndividualTVReducers";
import PopularTVReducers from "./Reducers/TVReducers/PopularTV/PopularTVReducers";
import TopRatedTVReducers from "./Reducers/TVReducers/TopRatedTV/TopRatedTVReducers";
import OnTheAirTVReducers from "./Reducers/TVReducers/OnTheAirTV/OnTheAirTVReducers";
import AiringTodayTVReducers from "./Reducers/TVReducers/AiringTodayTV/AiringTodayTVReducers";

export const store = configureStore({
  reducer: {
    SearchBarReducer,
    TrendingReducer,
    TrailersReducers,
    FreeMoviesReducers,
    FreeTVReducers,
    SearchQueryReducers,
    IndividualMovieReducers,
    PopularMoviesReducer,
    NowPlayingMoviesReducers,
    TopRatedMoviesReducers,
    UpcomingMoviesReducers,
    IndividualTVReducers,
    PopularTVReducers,
    TopRatedTVReducers,
    OnTheAirTVReducers,
    AiringTodayTVReducers,
  },
});
