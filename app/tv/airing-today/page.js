"use client";
import { asyncAiringTodayTV } from "@/store/Actions/TVActions/AiringTodayTV/AiringTodayTVActions";
import { changePage } from "@/store/Reducers/TVReducers/AiringTodayTV/AiringTodayTVReducers";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import RoutePage from "@/components/RoutePage";

const AiringTodayTVPage = () => {
  const { AiringTodayTVData, AiringTodayTVActivePage } = useSelector(
    (state) => state.AiringTodayTVReducers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncAiringTodayTV());
  }, [AiringTodayTVActivePage]);

  return (
    // <section className="wrapper lg:py-10 md:py-6 lg:px-28 md:p-20">
    //   <div className="header flex justify-between items-baseline xl:px-8">
    //     <span>
    //       <h1 className="text-2xl font-semibold">TV Shows Airing Today</h1>
    //     </span>
    //     <div className="pagination text-white flex gap-3">
    //       <Button
    //         onClick={() => {
    //           AiringTodayTVActivePage > 1 && dispatch(changePage(-1));
    //         }}
    //         className="pagination-btns text-sm outline-none bg-zinc-900 py-1 px-4 rounded-sm"
    //       >
    //         Previous
    //       </Button>
    //       <Button
    //         onClick={() => dispatch(changePage(1))}
    //         className="pagination-btns text-sm outline-none bg-zinc-900 py-1 px-4 rounded-sm"
    //       >
    //         Next
    //       </Button>
    //     </div>
    //   </div>
    //   <div className="cards-wrapper my-8 flex flex-wrap justify-center lg:gap-8 md:gap-5">
    //     {AiringTodayTVData.length > 0 ?
    //       AiringTodayTVData.map((elem, index) => {
    //         return (
    //           <Card
    //             key={index}
    //             className="lg:w-[200px] md:w-[180px] sm:w-[100px] min-h-[22rem]"
    //           >
    //             <CardHeader className="lg:h-72 overflow-hidden">
    //               <Link href={`/tv/${elem.id}`}>
    //                 <img
    //                   src={`https://www.themoviedb.org/t/p/original/${elem.poster_path}`}
    //                   alt="Image not available"
    //                   className="inline-block w-full h-full transition-all hover:scale-105"
    //                 />
    //               </Link>
    //             </CardHeader>
    //             <CardFooter>
    //               <CardTitle>
    //                 <Link href={`/tv/${elem.id}`} className="w-fit">
    //                   <h1 className="text-base leading-tight hover:text-blue-400">
    //                     {elem.name}
    //                   </h1>
    //                 </Link>
    //                 <p className="text-sm text font-normal mt-1 text-gray-500">
    //                   {elem.first_air_date}
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
    <RoutePage
      activePage={AiringTodayTVActivePage}
      changePage={changePage}
      dataArray={AiringTodayTVData}
      header={"TV Shows Airing Today"}
    />
  );
};

export default AiringTodayTVPage;
