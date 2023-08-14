"use client";
import { asyncUpcomingMovies } from "@/store/Actions/MoviesActions/UpcomingMovies/UpcomingMoviesActions";
import { changePage } from "@/store/Reducers/MoviesReducers/UpcamingMovies/UpcomingMoviesReducers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Card, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoadingSkeleton from "@/components/LoadingSkeleton"; 
import Link from "next/link";
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
