"use client";
import { asyncPopularTV } from "@/store/Actions/index";
import {
  changePage,
  popularTV,
} from "@/store/Reducers/TVReducers/PopularTV/PopularTVReducers";
import { sort } from "@/store/Reducers/TVReducers/PopularTV/PopularTVReducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const PopularTVPage = () => {
  const { PopularTVData, PopularTVActivePage, sort_by } = useSelector(
    (state) => state.PopularTVReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopularTV());

    return () => {
      dispatch(popularTV([]));
    };
  }, [PopularTVActivePage, sort_by]);

  return (
    <RoutePage
      activePage={PopularTVActivePage}
      changePage={changePage}
      dataArray={PopularTVData}
      sort={sort}
      header={"Popular TV Shows"}
    />
  );
};

export default PopularTVPage;
