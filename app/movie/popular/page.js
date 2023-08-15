"use client";
// import { asyncPopularMovies } from "@/store/Actions/MoviesActions/PopularMovies/PopularMoviesActions";
import { asyncPopularMovies } from "@/store/Actions/index";
import { changePage } from "@/store/Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const PopularMoviesPage = () => {
  const { PopularMoviesData, PopularMoviesActivePage } = useSelector(
    (state) => state.PopularMoviesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopularMovies(PopularMoviesActivePage));
  }, [PopularMoviesActivePage]);

  return (
    <RoutePage
      activePage={PopularMoviesActivePage}
      changePage={changePage}
      dataArray={PopularMoviesData}
      header={"Popular Movies"}
    />
  );
};

export default PopularMoviesPage;
