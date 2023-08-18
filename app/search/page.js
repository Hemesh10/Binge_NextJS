"use client";
import { asyncSearchQueryData } from "@/store/Actions/Homepage/Search/SearchQueryActions";
import { changePage } from "@/store/Reducers/HomePage/Search/SearchQueryReducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import { _searchQueryData } from "@/store/Actions/index";

const SearchResultsPage = ({ searchParams }) => {
  const dispatch = useDispatch();
  const { searchQueryData, activePage, totalPages } = useSelector(
    (state) => state.SearchQueryReducers
  );

  useEffect(() => {
    dispatch(asyncSearchQueryData(searchParams.query, activePage));
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [searchParams.query, activePage]);

  console.log(activePage);
  console.log(totalPages);
  return (
    <>
      <SearchBar initialValue={searchParams.query} />
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
