import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
import ImageCard from "./ImageCard";
// import { sort } from "@/store/Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";

const RoutePage = ({ activePage, changePage, dataArray, header }) => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="wrapper w-full py-6 2xl:px-36 xl:px-24 lg:px-16 px-6">
        {dataArray ? (
          <>
            <div className="header-and-pagination w-full flex justify-between items-center">
              <h1 className="text-2xl font-normal">{header}</h1>
              <div className="paginate-btns flex gap-2">
                <Button
                  onClick={() => {
                    activePage > 1 && dispatch(changePage(-1));
                  }}
                >
                  Previos
                </Button>
                <Button onClick={() => dispatch(changePage(1))}>Next</Button>
              </div>
              {/* <div className="sort-btn">
                <Select>
                  <SelectTrigger className="min-w-[200px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem ref={ref} value="pop-desc">
                        Popularity Descending
                      </SelectItem>
                      <SelectItem value="pop-asc">
                        Popularity Ascending
                      </SelectItem>
                      <SelectItem value="vote_count-dec">
                        Rating Descending
                      </SelectItem>
                      <SelectItem value="vote_count-asc">
                        Rating Ascending
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div> */}
            </div>
            <div className="results py-8 flex flex-wrap justify-center gap-5">
              {dataArray.map((elem) => {
                return <ImageCard elem={elem} />;
              })}
            </div>
            {/* <div className="pagination-sec w-full flex justify-center">
              <div className="paginate-btns flex gap-2">
                <Button
                  onClick={() => {
                    activePage > 1 && dispatch(changePage(-1));
                  }}
                >
                  Previos
                </Button>
                <Button onClick={() => dispatch(changePage(1))}>Next</Button>
              </div>
            </div> */}
          </>
        ) : (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1>Loading...</h1>
          </span>
        )}
      </section>
    </>
  );
};

export default RoutePage;
