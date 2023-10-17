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
import LoadingComponent from "./LoadingComponent";
import { ReloadIcon } from "@radix-ui/react-icons";
import Footer from "./Footer";

const RoutePage = ({ activePage, changePage, dataArray, sort, header }) => {
  const dispatch = useDispatch();
  const [sortDefault, setSortDefault] = useState("popularity.desc");

  const sortHandler = (event) => {
    if (header === "Popular Movies") {
      alert(
        "This section is still under development. The issuse is that this filter is not working exactly the way it should work when infinite scrolling is being used for loading data. But you can checkout this filter's functionality on /tv/popular (popular tv shows page). But there, I have to use pagination instead of infinite scrolling in order for this filter to work."
      );
    } else {
      dispatch(sort(event));
      dispatch(changePage(-activePage + 1));
      setSortDefault(event);
    }
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
    <>
      <section className="wrapper w-full py-6 2xl:px-36 xl:px-24 lg:px-16 px-6">
        {dataArray.length > 0 ? (
          <>
            <div className="header-and-pagination w-full flex justify-between items-center">
              <h1 className="text-2xl font-normal">{header}</h1>
              {header === "Popular Movies" ? (
                <div className="sort-section flex gap-3">
                  <Select onValueChange={sortHandler} value={sortDefault}>
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
                  <Select
                    onValueChange={sortHandler}
                    defaultValue={sortDefault}
                  >
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
            <div className="results py-8 flex flex-wrap justify-center gap-5">
              {dataArray.map((elem, index) => {
                return (
                  <div
                  ref={
                    header != "Popular TV Shows" &&
                    index === dataArray.length - 1
                      ? lastMovie
                      : null
                  }
                  >
                    <ImageCard key={elem.id} elem={elem} />
                  </div>
                );
              })}
            </div>
            <div className="pagination w-full flex justify-center">
              {header == "Popular TV Shows" ? (
                <div className="paginate h-16 mt-5 flex justify-center items-center gap-5">
                  <div className="button">
                    <Button
                      disabled={activePage === 1 ? true : false}
                      onClick={() => dispatch(changePage(-1))}
                      className="w-24"
                    >
                      Previous
                    </Button>
                  </div>
                  <h1>{activePage}</h1>
                  <div className="button">
                    <Button
                      onClick={() => dispatch(changePage(1))}
                      className="w-24"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                <Button disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              )}
            </div>
          </>
        ) : (
          <LoadingComponent />
        )}
      </section>
      {dataArray.length > 0 && <Footer />}
    </>
  );
};

export default RoutePage;
