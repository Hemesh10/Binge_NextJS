"use client";
import { asyncUpcomingMovies } from "@/store/Actions/index";
import { changePage } from "@/store/Reducers/MoviesReducers/UpcamingMovies/UpcomingMoviesReducers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const UpcomingMoviesPage = () => {
  const { UpcomingMoviesData, UpcomingMoviesActivePage } = useSelector(
    (state) => state.UpcomingMoviesReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncUpcomingMovies());
  }, [UpcomingMoviesActivePage]);

  return (
    <RoutePage
      activePage={UpcomingMoviesActivePage}
      changePage={changePage}
      dataArray={UpcomingMoviesData}
      header={"Upcoming Movies"}
    />
  );
};

export default UpcomingMoviesPage;
