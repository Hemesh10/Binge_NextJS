"use client";
import { asyncPopularTV} from "@/store/Actions/index"
import { changePage } from "@/store/Reducers/TVReducers/PopularTV/PopularTVReducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const PopularTVPage = () => {
  const { PopularTVData, PopularTVActivePage } = useSelector(
    (state) => state.PopularTVReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopularTV());
  }, [PopularTVActivePage]);
  return (
    <RoutePage
      activePage={PopularTVActivePage}
      changePage={changePage}
      dataArray={PopularTVData}
      header={"Popular TV Shows"}
    />
  );
};

export default PopularTVPage;
