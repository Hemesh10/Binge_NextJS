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
import { setSearchQueries } from "@/store/Reducers/HomePage/SearchBar/SearchBarReducer";
import { asyncDynamicSearchResults } from "@/store/Actions/Homepage/SearchBar/SearchBarActions";
import Footer from "@/components/Footer";
import Link from "next/link";

const SearchResultsPage = ({ searchParams }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchQueries, searchBarDynamicResults } = useSelector(
    (state) => state.SearchBarReducer
  );
  const { searchQueryData, activePage, totalPages } = useSelector(
    (state) => state.SearchQueryReducers
  );

  const [initialValue, setInitialValue] = useState(searchParams.query);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.search_q.value.length <= 0) {
      alert("Bakchodi mat kr");
    } else {
      dispatch(changePage(-activePage + 1));
      router.push(`/search?query=${event.target.search_q.value}`);
    }
  };

  const changeHandler = (event) => {
    event.preventDefault();
    setInitialValue(event.target.value);
    dispatch(setSearchQueries(event.target.value));
    dispatch(asyncDynamicSearchResults());
  };

  const showSearchSuggestionBox = () => {
    setShowSuggestions(true);
  };

  const onLinkClick = () => {
    setShowSuggestions(false);
  };

  useEffect(() => {
    //
    dispatch(asyncSearchQueryData(searchParams.query, activePage));
    setShowSuggestions(false);
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });

    return () => {
      dispatch(setSearchQueries(""));
    };
  }, [searchParams.query, activePage]);

  return (
    <>
      <div className="personalSearchBar relative w-full flex items-center gap-4 border-b-[.2px] 2xl:px-36 xl:px-24 lg:px-16 px-6 border-slate-300">
        <div className="search-icon flex items-center">
          <i className="ri-search-line font-semibold"></i>
        </div>
        <form onSubmit={submitHandler} className="w-full h-full">
          <input
            type="text"
            name="search_q"
            value={initialValue}
            onChange={changeHandler}
            onFocus={showSearchSuggestionBox}
            onClick={showSearchSuggestionBox}
            className="w-full text-lg italic text-slate-600 outline-none py-2"
          />
        </form>
        {showSuggestions && searchQueries.length > 0 && (
          <i
            class="ri-close-line text-2xl cursor-pointer"
            onClick={() => setShowSuggestions(false)}
          ></i>
        )}
      </div>
      {showSuggestions && searchQueries.length > 0 && (
        <div className="search-suggestions flex flex-col gap-0 absolute sm:w-[98%] w-full left-1/2 -translate-x-1/2 z-50 space-y-1 2xl:px-36 xl:px-24 lg:px-16 px-2 rounded-lg bg-slate-200">
          {searchBarDynamicResults
            .filter((elem) => !elem.gender)
            .slice(0, 15)
            .map((element) => {
              return (
                <Link
                  key={element.id}
                  href={
                    element.title ? `/movie/${element.id}` : `/tv/${element.id}`
                  }
                  onClick={onLinkClick}
                >
                  <h1 className="text-base flex gap-2 leading-tight sm:leading-normal hover:text-blue-600">
                    {element.title ? (
                      <>
                        <span>
                          <i className="ri-film-line"></i>
                        </span>
                        <span>{element.title} &nbsp;&nbsp;</span>
                      </>
                    ) : (
                      <>
                        <span>
                          <i className="ri-tv-line"></i>
                        </span>
                        <span>{element.name} &nbsp;&nbsp;</span>
                      </>
                    )}
                  </h1>
                </Link>
              );
            })}
        </div>
      )}
      <section className="wrapper flex flex-col 2xl:px-36 xl:px-24 lg:px-16 px-2 py-4 gap-4">
        <div className="results-display-seaction flex flex-col gap-6">
          {searchQueryData.length > 0 ? (
            searchQueryData.map((elem, index) => {
              return <SearchResultCard elem={elem} index={index} />;
            })
          ) : (
            <h1>No data available for query '{searchParams.query}'</h1>
          )}
        </div>
        {searchQueryData.length > 0 && (
          <div className="paginate w-full h-16 mt-5 flex justify-center items-center gap-4">
            <Button
              disabled={activePage === 1 ? true : false}
              onClick={() => dispatch(changePage(-1))}
              className="w-24"
            >
              Previous
            </Button>
            <h1>{activePage}</h1>
            <Button
              disabled={activePage === totalPages ? true : false}
              onClick={() => dispatch(changePage(1))}
              className="w-24"
            >
              Next
            </Button>
          </div>
        )}
      </section>
      {searchQueryData.length > 0 && <Footer />}
    </>
  );
};

export default SearchResultsPage;
