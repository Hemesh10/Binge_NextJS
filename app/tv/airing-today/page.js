"use client";
import { asyncAiringTodayTV } from "@/store/Actions/index";
import {
  changePage,
  airingTodayTV,
} from "@/store/Reducers/TVReducers/AiringTodayTV/AiringTodayTVReducers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const AiringTodayTVPage = () => {
  const { AiringTodayTVData, AiringTodayTVActivePage } = useSelector(
    (state) => state.AiringTodayTVReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncAiringTodayTV());

    return () => {
      dispatch(airingTodayTV([]));
    };
  }, [AiringTodayTVActivePage]);

  return (
    <RoutePage
      activePage={AiringTodayTVActivePage}
      changePage={changePage}
      dataArray={AiringTodayTVData}
      header={"TV Shows Airing Today"}
    />
  );
};

export default AiringTodayTVPage;
