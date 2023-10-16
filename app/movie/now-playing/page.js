"use client";
import { asyncNowPlayingMovies } from "@/store/Actions/index";
import {
  changePage,
  nowPlayingMovies,
} from "@/store/Reducers/MoviesReducers/NowPlayingMovies/NowPlayingMoviesReducers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const NowPlayingMoviesPage = () => {
  const { NowPlayingMoviesData, NowPlayingMoviesActivePage } = useSelector(
    (state) => state.NowPlayingMoviesReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncNowPlayingMovies());

    return () => {
      dispatch(nowPlayingMovies([]));
    };
  }, [NowPlayingMoviesActivePage]);

  return (
    <RoutePage
      activePage={NowPlayingMoviesActivePage}
      changePage={changePage}
      dataArray={NowPlayingMoviesData}
      header={"Now Playing Movies"}
    />
  );
};

export default NowPlayingMoviesPage;
