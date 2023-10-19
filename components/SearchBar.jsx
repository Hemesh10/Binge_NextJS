"use client";
import { setSearchQueries } from "@/store/Reducers/HomePage/SearchBar/SearchBarReducer";
import { asyncDynamicSearchResults } from "@/store/Actions/Homepage/SearchBar/SearchBarActions";
import { changeSearchBarState } from "@/store/Reducers/HomePage/SearchBar/SearchBarReducer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SearchBar = ({ handleSearchBarDisplay }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { searchQueries, searchBarDynamicResults } = useSelector(
    (state) => state.SearchBarReducer
  );
  const { trendingTodayData } = useSelector((state) => state.TrendingReducer);

  const changeHandler = (value) => {
    dispatch(setSearchQueries(value));
    dispatch(asyncDynamicSearchResults());
  };

  const onLinkClick = () => {
    dispatch(changeSearchBarState(false));
    dispatch(setSearchQueries(""));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.search_q.value.length <= 0) {
      alert("Bakchodi mat kr");
    } else {
      handleSearchBarDisplay(false);
      router.push(`/search?query=${event.target.search_q.value}`);
    }
  };

  return (
    <section className="search-bar absolute z-[100] w-full h-10 outline outline-1 outline-slate-300 bg-white">
      <div className="form-container w-full h-full flex gap-2 border-none 2xl:px-36 xl:px-24 lg:px-16 px-6">
        <div className="search-icon flex items-center">
          <i className="ri-search-line font-semibold"></i>
        </div>
        <form onSubmit={submitHandler} className="w-full h-full">
          <input
            type="text"
            name="search_q"
            value={searchQueries}
            onChange={(event) => changeHandler(event.target.value)}
            placeholder="Search for a movie or a tv show..."
            className="px-4 py-2 border-none outline-none text-lg italic text-slate-400"
          />
        </form>
        <button onClick={() => handleSearchBarDisplay(false)}>Close</button>
      </div>
      <div className="search-suggestions w-full border-slate-300 mt-[1px] 2xl:px-36 xl:px-24 lg:px-16 px-6 bg-white">
        {searchQueries.length > 0 ? (
          <div className="dynamic-search-result flex flex-col gap-2 py-2">
            {searchBarDynamicResults.length > 0 &&
              searchBarDynamicResults
                .filter((elem) => !elem.gender)
                .slice(0, 15)
                .map((element) => {
                  return (
                    <Link
                      key={element.id}
                      href={
                        element.title
                          ? `/movie/${element.id}`
                          : `/tv/${element.id}`
                      }
                      onClick={onLinkClick}
                    >
                      <h1 className="text-base flex gap-2 hover:text-blue-600">
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
        ) : (
          <div className="trending-results">
            <div className="header">
              <h1 className="text-xl font-medium flex gap-2 leading-[3rem]">
                <span>
                  <i className="ri-funds-line text-2xl"></i>
                </span>
                <span>Trending</span>
              </h1>
            </div>
            <div className="list flex flex-col gap-3 pb-2">
              {trendingTodayData.slice(0, 10).map((listItem) => {
                return (
                  <Link
                    key={listItem.id}
                    href={
                      listItem.title
                        ? `/movie/${listItem.id}`
                        : `/tv/${listItem.id}`
                    }
                    onClick={onLinkClick}
                  >
                    <h1 className="text-base flex gap-2 hover:text-blue-600">
                      <span>
                        <i className="ri-search-line font-semibold"></i>
                      </span>
                      <span>
                        {listItem.title ? listItem.title : listItem.name}
                      </span>
                    </h1>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
