import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ImageCard from "./ImageCard";

const RoutePage = ({ activePage, changePage, dataArray, sort, header }) => {
  const dispatch = useDispatch();

  const [sortDefault, setSortDefault] = useState("popularity.desc");

  const sortHandler = (event) => {
    dispatch(sort(event));
    setSortDefault(event)
  };

  console.log(dataArray)

  return (
    <>
      <section className="wrapper w-full py-6 2xl:px-36 xl:px-24 lg:px-16 px-6">
        {dataArray.length > 0 ? (
          <>
            <div className="header-and-pagination w-full flex justify-between items-center">
              <h1 className="text-2xl font-normal">{header}</h1>
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
            </div>
            <div className="results py-8 flex flex-wrap justify-center gap-5">
              {dataArray.map((elem) => {
                return <ImageCard elem={elem} />;
              })}
            </div>
            <div className="pagination-sec w-full flex justify-center">
              <div className="paginate-btns flex items-center gap-2">
                <Button
                  onClick={() => {
                    activePage > 1 && dispatch(changePage(-1));
                  }}
                >
                  Previos
                </Button>
                <p className="text-lg pointer-events-none mx-4">{activePage}</p>
                <Button onClick={() => dispatch(changePage(1))}>Next</Button>
              </div>
            </div>
          </>
        ) : (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span>Loading...</span>
          </span>
        )}
      </section>
    </>
  );
};

export default RoutePage;
