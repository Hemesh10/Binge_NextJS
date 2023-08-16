"use client";
import { asyncTopRatedTV} from "@/store/Actions/index"
import { changePage } from "@/store/Reducers/TVReducers/TopRatedTV/TopRatedTVReducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const TopRatedTVPage = () => {
  const { TopRatedTVData, TopRatedTVActivePage } = useSelector(
    (state) => state.TopRatedTVReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncTopRatedTV());
  }, [TopRatedTVActivePage]);

  return (
    <RoutePage
      activePage={TopRatedTVActivePage}
      changePage={changePage}
      dataArray={TopRatedTVData}
      header={"Top Rated TV Shows"}
    />
  );
};

export default TopRatedTVPage;
