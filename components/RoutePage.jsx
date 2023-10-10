import { useDispatch } from "react-redux";
import { useCallback, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ImageCard from "./ImageCard";
import { Button } from "./ui/button";
// import { toast } from "./ui/use-toast";
// import { asyncPopularMovies } from "@/store/Actions";
import { popularMovies } from "@/store/Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";
import LoadingComponent from "./LoadingComponent";

const RoutePage = ({ activePage, changePage, dataArray, sort, header }) => {
  const dispatch = useDispatch();
  const [sortDefault, setSortDefault] = useState("popularity.desc");

  const sortHandler = (event) => {
    dispatch(popularMovies([]));
    console.log(event);
    // dispatch(sort(event));
    // dispatch(changePage(-activePage + 1));
    // setSortDefault(event);
  };

  const observer = useRef(null);

  const lastMovie = useCallback(
    (node) => {
      if (!node) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("Intersection happened");
          dispatch(changePage(1));
        }
      });
      observer.current.observe(node);
    },
    [dataArray.length]
  );

  return (
    <section className="wrapper w-full py-6 2xl:px-36 xl:px-24 lg:px-16 px-6">
      {dataArray.length > 0 ? (
        <>
          <div className="header-and-pagination w-full flex justify-between items-center">
            <h1 className="text-2xl font-normal">{header}</h1>
            {header === "Popular Movies" ? (
              <div className="sort-section flex gap-3">
                <Select onValueChange={sortHandler} defaultValue={sortDefault}>
                  <SelectTrigger className="min-w-[200px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="popularity.desc">
                        Popularity Descending
                      </SelectItem>
                      <SelectItem value="popularity.asc">
                        Popularity Ascending
                      </SelectItem>
                      <SelectItem value="vote_average.desc">
                        Rating Descending
                      </SelectItem>
                      <SelectItem value="vote_average.asc">
                        Rating Ascending
                      </SelectItem>
                      <SelectItem value="revenue.desc">
                        Revenue Descending
                      </SelectItem>
                      <SelectItem value="revenue.asc">
                        Revenue Ascending
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ) : header === "Popular TV Shows" ? (
              <div className="sort-section flex gap-3">
                <Select onValueChange={sortHandler} defaultValue={sortDefault}>
                  <SelectTrigger className="min-w-[200px]">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="popularity.desc">
                        Popularity Descending
                      </SelectItem>
                      <SelectItem value="popularity.asc">
                        Popularity Ascending
                      </SelectItem>
                      <SelectItem value="vote_average.desc">
                        Rating Descending
                      </SelectItem>
                      <SelectItem value="vote_average.asc">
                        Rating Ascending
                      </SelectItem>
                      <SelectItem value="revenue.desc">
                        Revenue Descending
                      </SelectItem>
                      <SelectItem value="revenue.asc">
                        Revenue Ascending
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            ) : null}
          </div>
          <div className="results py-8 flex flex-wrap justify-center  gap-5">
            {dataArray.map((elem, index) => {
              return (
                <div ref={index === dataArray.length - 1 ? lastMovie : null}>
                  <ImageCard key={elem.id} elem={elem} />
                </div>
              );
            })}
          </div>
          <div className="pagination w-full flex justify-center items-center gap-5">
            <Button onClick={() => dispatch(changePage(1))}>
              Load More Data
            </Button>
          </div>
        </>
      ) : (
        <LoadingComponent />
      )}
    </section>
  );
};

export default RoutePage;
