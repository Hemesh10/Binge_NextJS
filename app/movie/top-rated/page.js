"use client";
import { asyncTopRatedMovies } from "@/store/Actions/index";
import { changePage } from "@/store/Reducers/MoviesReducers/TopRatedMovies/TopRatedMoviesReducers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const TopRatedMoviesPage = () => {
  const { TopRatedMoviesData, TopRatedMoviesActivePage } = useSelector(
    (state) => state.TopRatedMoviesReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncTopRatedMovies());
  }, [TopRatedMoviesActivePage]);

  return (
    <RoutePage
      activePage={TopRatedMoviesActivePage}
      changePage={changePage}
      dataArray={TopRatedMoviesData}
      header={"Top Rated Movies"}
    />
  );
};

export default TopRatedMoviesPage;
