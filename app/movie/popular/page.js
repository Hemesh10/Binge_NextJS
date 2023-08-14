"use client";
import { asyncPopularMovies } from "@/store/Actions/MoviesActions/PopularMovies/PopularMoviesActions";
import { changePage } from "@/store/Reducers/MoviesReducers/PopularMovies/PopularMoviesReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const PopularMoviesPage = () => {
  const { PopularMoviesData, PopularMoviesActivePage } = useSelector(
    (state) => state.PopularMoviesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopularMovies(PopularMoviesActivePage));
  }, [PopularMoviesActivePage]);

  return (
    // <section className="wrapper lg:py-10 md:py-6 lg:px-28 md:p-20">
    //   <div className="header flex justify-between items-baseline xl:px-8">
    //     <span>
    //       <h1 className="text-2xl font-semibold">Popular Movies</h1>
    //     </span>
    //     <div className="pagination text-white flex gap-3">
    //       <Button
    // onClick={() => {
    //   PopularMoviesActivePage > 1 && dispatch(changePage(-1));
    // }}
    //       >
    //         Previous
    //       </Button>
    //       <Button
    //         onClick={() => dispatch(changePage(1))}
    //       >
    //         Next
    //       </Button>
    //     </div>
    //   </div>
    //   <div className="cards-wrapper my-8 flex flex-wrap justify-center lg:gap-8 md:gap-5 sm:gap-5">
    //     {PopularMoviesData.length > 0 ?
    //       PopularMoviesData.map((elem, index) => {
    //         return (
    //           <Card
    //             key={index}
    //             className="lg:w-[200px] md:w-[200px] sm:w-[180px] min-h-[22rem]"
    //           >
    //             <CardHeader className="lg:h-72 overflow-hidden">
    //               <Link href={`/movie/${elem.id}`}>
    //                 <img
    //                   src={`https://www.themoviedb.org/t/p/original/${elem.poster_path}`}
    //                   alt=""
    //                   className="inline-block w-full h-full transition-all hover:scale-105"
    //                 />
    //               </Link>
    //             </CardHeader>
    //             <CardFooter>
    //               <CardTitle>
    //                 <Link href={`/movie/${elem.id}`} className="w-fit">
    //                   <h1 className="text-base leading-tight hover:text-blue-400">
    //                     {elem.title}
    //                   </h1>
    //                 </Link>
    //                 <p className="text-sm text font-normal mt-1 text-gray-500">
    //                   {elem.release_date}
    //                 </p>
    //               </CardTitle>
    //             </CardFooter>
    //           </Card>
    //         );
    //       }) : (
    //         <LoadingSkeleton cards={10} />
    //       )}
    //   </div>
    // </section>
    // <section className="wrapper w-full py-6 2xl:px-36 xl:px-24 lg:px-16 px-6">
    //   <div className="header-and-pagination w-full flex sm:justify-between justify-center items-center">
    //     <h1 className="text-2xl font-normal">Popular Movies</h1>
    //     <div className="paginate-btns sm:flex hidden gap-2">
    //       <Button
    //         onClick={() => {
    //           PopularMoviesActivePage > 1 && dispatch(changePage(-1));
    //         }}
    //       >
    //         Previos
    //       </Button>
    //       <Button onClick={() => dispatch(changePage(1))}>Next</Button>
    //     </div>
    //   </div>
    //   <div className="results py-8 px-6 flex flex-wrap justify-center gap-5">
    //     {PopularMoviesData.length > 0 ? (
    //       PopularMoviesData.map((elem) => {
    //         return <ImageCard elem={elem} />;
    //       })
    //     ) : (
    //       <LoadingSkeleton cards={10} heigth={350} width={200} />
    //     )}
    //   </div>
    // </section>
    <RoutePage
      activePage={PopularMoviesActivePage}
      changePage={changePage}
      dataArray={PopularMoviesData}
      header={"Popular Movies"}
    />
  );
};

export default PopularMoviesPage;
