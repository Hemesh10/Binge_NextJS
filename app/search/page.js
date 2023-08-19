"use client";
import { asyncSearchQueryData } from "@/store/Actions/Homepage/Search/SearchQueryActions";
import { changePage } from "@/store/Reducers/HomePage/Search/SearchQueryReducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// import SearchBar from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import { _searchQueryData } from "@/store/Actions/index";
import { useRouter } from "next/navigation";

const SearchResultsPage = ({ searchParams }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchQueryData, activePage, totalPages } = useSelector(
    (state) => state.SearchQueryReducers
  );

  const [initialValue, setInitialValue] = useState(searchParams.query);

  const submitHandler = (event) => {
    event.preventDefault();
    router.push(`/search?query=${event.target.search_q.value}`);
  };

  useEffect(() => {
    dispatch(asyncSearchQueryData(searchParams.query, activePage));
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [searchParams.query, activePage]);
  return (
    <>
      <div className="personalSearchBar w-full flex gap-4 border-b-[.2px] 2xl:px-36 xl:px-24 lg:px-16 px-6 border-slate-300">
        <div className="search-icon flex items-center">
          <i className="ri-search-line font-semibold"></i>
        </div>
        <form onSubmit={submitHandler} className="w-full h-full">
          <input
            type="text"
            name="search_q"
            value={initialValue}
            onChange={() => setInitialValue(event.target.value)}
            className="w-full text-lg italic text-slate-600 outline-none py-2"
          />
        </form>
      </div>
      <section className="wrapper flex flex-col 2xl:px-36 xl:px-24 lg:px-16 px-6 py-5 gap-4">
        <div className="results-display-seaction flex flex-col gap-4">
          {searchQueryData.length > 0 &&
            searchQueryData.map((elem, index) => {
              return <SearchResultCard elem={elem} index={index} />;
            })}
        </div>
        {searchQueryData.length > 0 && (
          <div className="paginate w-full h-16 mt-5 flex justify-center items-center gap-4">
            <div className="button">
              <Button
                onClick={() => activePage > 1 && dispatch(changePage(-1))}
              >
                Previous
              </Button>
            </div>
            <div className="button">
              <Button
                onClick={() =>
                  activePage < totalPages && dispatch(changePage(1))
                }
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SearchResultsPage;
