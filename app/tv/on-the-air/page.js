"use client";
import { asyncOnAirTV} from "@/store/Actions/index"
import { changePage, onAirTV } from "@/store/Reducers/TVReducers/OnTheAirTV/OnTheAirTVReducers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const OnTheAirTVPage = () => {
  const { OnAirTVData, OnAirTVActivePage } = useSelector(
    (state) => state.OnTheAirTVReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncOnAirTV());

    return () => {
      dispatch(onAirTV([]));
    };
  }, [OnAirTVActivePage]);
  return (
    <RoutePage
      activePage={OnAirTVActivePage}
      changePage={changePage}
      dataArray={OnAirTVData}
      header={"Currently Airing TV Shows"}
    />
  );
};

export default OnTheAirTVPage;
