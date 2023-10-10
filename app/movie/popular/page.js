"use client";
import { asyncPopularMovies } from "@/store/Actions/index";
import {
  changePage,
  popularMovies,
} from "@/store/Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";
import { sort } from "@/store/Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const PopularMoviesPage = () => {
  const { PopularMoviesData, PopularMoviesActivePage, sort_by } = useSelector(
    (state) => state.PopularMoviesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopularMovies());
    // return () => {
    //   dispatch(
    //     changePage(-PopularMoviesActivePage + 1)
    //   );
    //   console.log("Component unmounted!"); //why this is happening???
    // };
  }, [PopularMoviesActivePage, sort_by]);

  return (
    <RoutePage
      activePage={PopularMoviesActivePage}
      changePage={changePage}
      dataArray={PopularMoviesData}
      sort={sort}
      header={"Popular Movies"}
    />
  );
};

export default PopularMoviesPage;
