"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  asyncTrendingToday,
  asyncTrendingWeekly,
  asyncFreeMovies,
  asyncFreeTV,
  remove_todayError,
  remove_weeklyError,
} from "@/store/Actions/index";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import HomePageCard from "@/components/HomePageCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    trendingTodayData,
    trendingWeeklyData,
    trendingTodayErrorMsg,
    trendingWeeklyErrorMsg,
  } = useSelector((state) => state.TrendingReducer);

  const { FreeMoviesData } = useSelector((state) => state.FreeMoviesReducers);
  const { FreeTVData } = useSelector((state) => state.FreeTVReducers);

  const [search, setSearch] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.search_q.value.length > 0) {
      router.refresh("/");
      router.push(`/search?query=${event.target.search_q.value}`);
    } else {
      toast.warn("Kuch type to krlo pehle 🙂");
    }
  };

  useEffect(() => {
    dispatch(asyncTrendingToday());
    dispatch(asyncTrendingWeekly());
    dispatch(asyncFreeMovies());
    dispatch(asyncFreeTV());
  }, []);

  if (trendingTodayErrorMsg) {
    toast.error(trendingTodayErrorMsg);
    dispatch(remove_todayError());
  } else if (trendingWeeklyErrorMsg) {
    toast.error(trendingWeeklyErrorMsg);
    dispatch(remove_weeklyError());
  }

  // console.log("This is the trending today data : ", trendingTodayData);
  // console.log("This is the trending weekly data : ", trendingWeeklyData);
  // console.log("This is the free movies data : ", FreeMoviesData);
  // console.log("This is the free TV data : ", FreeTVData);

  //TODO Images Optimization
  //TODO Getting average/domain color of an image

  return (
    <main className="min-h-[100vh] w-full 2xl:px-28 xl:px-24">
      <section className="welcome-poster relative w-full">
        <div className="img-sec relative w-full 2xl:h-72 h-64">
          <Image
            src={
              "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg"
            }
            alt="Cover Image"
            layout="fill"
            priority
            className="object-cover"
          />
        </div>
        <div className="tagline-and-search absolute top-0 flex flex-col w-full h-full px-10 justify-evenly text-white">
          <div className="header">
            <h1 className="text-[2.75rem] font-bold leading-none">Welcome.</h1>
            <h2 className="text-3xl font-semibold tracking-wide">
              Millions of Movies and TV Shows to discover. Explore Now.
            </h2>
          </div>
          <div className="search-bar w-full h-12 rounded-full overflow-hidden text-black">
            <form
              onSubmit={submitHandler}
              className="flex w-full h-full bg-slate-50"
            >
              <input
                type="text"
                name="search_q"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                autoComplete="off"
                placeholder="Search for a movie or a tv show..."
                className="text-gray-400 italic text-lg border-none outline-none px-6"
              />
              {search.length > 0 ? (
                <button type="submit" className="mx-6">
                  <i className="ri-search-line text-xl font-normal"></i>
                </button>
              ) : (
                <button type="submit" className="mx-6 pointer-events-none">
                  <i className="ri-search-line text-xl font-normal opacity-50"></i>
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
      <section className="trending-section w-full py-6">
        <Tabs defaultValue="today">
          <>
            <div className="section-header flex gap-4 pl-12">
              <h1 className="text-2xl font-medium">Trending</h1>
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="weekly">This Week</TabsTrigger>
              </TabsList>
            </div>
            <div className="content-slider">
              <TabsContent value="today">
                <div className="slider w-full flex py-4 px-12 gap-6 overflow-x-auto">
                  {trendingTodayData.length > 0 ? (
                    trendingTodayData.map((elem) => {
                      return (
                        <div key={elem.id} className="card-wrapper">
                          <HomePageCard elem={elem} />
                        </div>
                      );
                    })
                  ) : (
                    <LoadingSkeleton cards={8} heigth={250} width={180} />
                  )}
                </div>
              </TabsContent>
              <TabsContent value="weekly">
                <div className="slider w-full flex py-4 px-12 gap-6 overflow-x-auto">
                  {trendingWeeklyData.length > 0 ? (
                    trendingWeeklyData.map((elem) => {
                      return (
                        <div key={elem.id} className="card-wrapper">
                          <HomePageCard elem={elem} />
                        </div>
                      );
                    })
                  ) : (
                    <LoadingSkeleton cards={8} heigth={250} width={180} />
                  )}
                </div>
              </TabsContent>
            </div>
          </>
        </Tabs>
      </section>
      <section className="free-to-watch w-full py-0">
        <Tabs defaultValue="free-movies">
          <>
            <div className="section-header flex gap-4 pl-12">
              <h1 className="text-2xl font-medium">Free To Watch</h1>
              <TabsList>
                <TabsTrigger value="free-movies">Movies</TabsTrigger>
                <TabsTrigger value="free-tv">TV</TabsTrigger>
              </TabsList>
            </div>
            <div className="content-slider">
              <TabsContent value="free-movies">
                <div className="slider w-full flex py-4 px-12 gap-6 overflow-x-auto">
                  {FreeMoviesData.length > 0 ? (
                    FreeMoviesData.map((elem) => {
                      return (
                        <div key={elem.id} className="card-wrapper">
                          <HomePageCard elem={elem} />
                        </div>
                      );
                    })
                  ) : (
                    <LoadingSkeleton cards={8} heigth={250} width={180} />
                  )}
                  {/* <div className="w-36 h-52 bg-yellow-500"></div> */}
                </div>
              </TabsContent>
              <TabsContent value="free-tv">
                <div className="slider w-full flex py-4 px-12 gap-6 overflow-x-auto">
                  {FreeTVData.length > 0 ? (
                    FreeTVData.map((elem) => {
                      return (
                        <div key={elem.id} className="card-wrapper">
                          <HomePageCard elem={elem} />
                        </div>
                      );
                    })
                  ) : (
                    <LoadingSkeleton cards={8} heigth={250} width={180} />
                  )}
                </div>
              </TabsContent>
            </div>
          </>
        </Tabs>
      </section>
    </main>
  );
}
