"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "@mui/material";
import { Button } from "@/components/ui/button";
import {
  asyncTrendingToday,
  asyncTrendingWeekly,
  asyncFreeMovies,
  asyncFreeTV,
  remove_todayError,
  remove_weeklyError,
} from "@/store/Actions/index";
import {
  asyncGetTrendingTodayTrailersData,
  asyncGetTrendingWeeklyTrailersData,
} from "@/store/Actions/Homepage/Trailers/TrailersActions";
import { changeSearchBarState } from "@/store/Reducers/HomePage/SearchBar/SearchBarReducer";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import TabsAndSlider from "@/components/TabsAndSliderSection";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Home() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    trendingTodayData,
    trendingWeeklyData,
    trendingTodayErrorMsg,
    trendingWeeklyErrorMsg,
  } = useSelector((state) => state.TrendingReducer);

  const {
    trendingTodayTrailersIDs,
    trendingWeeklyTrailersIDs,
    trendingTodayTrailersData,
    trendingWeeklyTrailersData,
  } = useSelector((state) => state.TrailersReducers);

  const { FreeMoviesData } = useSelector((state) => state.FreeMoviesReducers);
  const { FreeTVData } = useSelector((state) => state.FreeTVReducers);

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [trailerModal, setTrailerModal] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const [trailerSectionBackdrop, setTrailerSectionBackdrop] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (event.target.search_q.value.length > 0) {
      router.push(`/search?query=${event.target.search_q.value}`);
    } else {
      toast({
        title: "Zyada tezz mt chalo",
        description: "Kuch type krke search karo 😕",
      });
    }
  };

  useEffect(() => {
    dispatch(asyncTrendingToday());
    dispatch(asyncTrendingWeekly());
    dispatch(asyncFreeMovies());
    dispatch(asyncFreeTV());

    return () => {
      dispatch(changeSearchBarState(false));
    };
  }, []);

  useEffect(() => {
    dispatch(asyncGetTrendingTodayTrailersData());
  }, [trendingTodayTrailersIDs]);

  useEffect(() => {
    dispatch(asyncGetTrendingWeeklyTrailersData());
  }, [trendingWeeklyTrailersIDs]);

  if (trendingTodayErrorMsg) {
    toast({
      variant: "destructive",
      title: "Error Message",
      description: trendingTodayErrorMsg,
    });
    dispatch(remove_todayError());
  } else if (trendingWeeklyErrorMsg) {
    toast({
      variant: "destructive",
      title: "Error Message",
      description: trendingWeeklyErrorMsg,
    });
    dispatch(remove_weeklyError());
  }

  const triggerModal = (key) => {
    if (key) {
      setTrailerKey(key);
      setTrailerModal(true);
    }
  };

  const setTrailerSectionCover = (backdrop_cover) => {
    setTrailerSectionBackdrop(backdrop_cover);
  };

  //TODO Getting average/domain color of an image
  //TODO progress bar
  //TODO Infinite Scrolling

  return (
    <main className="relative min-h-[100vh] w-full 2xl:px-28 xl:px-24">
      <Modal
        open={trailerModal}
        onClose={() => setTrailerModal(false) && setTrailerKey("")}
      >
        <div className="player-wrapper w-[95%] h-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[53.5%] bg-black">
          <div className="player-header text-white w-full flex justify-between items-center py-1 px-4">
            <h1 className="text-lg font-normal">Play Trailer</h1>
            <Button onClick={() => setTrailerModal(false)}>
              <p className="font-normal">X</p>
            </Button>
          </div>
          <div className="player w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              allow="autoplay"
              frameborder="0"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </Modal>
      <section className="welcome-poster relative w-full">
        <div className="img-sec relative w-full 2xl:h-72 h-64">
          <Image
            src={
              "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg"
            }
            alt="Cover Image"
            fill={true}
            priority
            className="object-cover"
          />
        </div>
        <div className="tagline-and-search absolute top-0 flex flex-col w-full h-full 2xl:px-10 px-4 justify-evenly text-white">
          <div className="header">
            <h1 className="text-[2.65rem] font-bold leading-none">Welcome.</h1>
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
                className="text-gray-500 italic text-lg border-none outline-none px-6"
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
      <section className="trending-section w-full pt-6">
        <TabsAndSlider
          headerMain={"Trending"}
          triggerHeader1={"Today"}
          triggerHeader2={"Weekly"}
          dataPrimary={trendingTodayData}
          dataSecondary={trendingWeeklyData}
        />
      </section>
      <section className="trailers-section relative w-full pt-6">
        <Image
          src={
            trendingTodayTrailersData.length > 0 &&
            trailerSectionBackdrop === ""
              ? `https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/2D6ksPSChcRcZuvavrae9g4b8oh.jpg`
              : `https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${trailerSectionBackdrop}`
          }
          alt="Backdrop Poster"
          fill={true}
          sizes="(min-width: 640px) 100vw"
          className="absolute -z-10 object-cover object-top"
        />
        <Tabs defaultValue="trendingTodayTrailers">
          <div className="section-header flex gap-4 pl-12">
            <h1 className="text-2xl text-white font-medium">
              Trending Trailers
            </h1>
            <TabsList>
              <TabsTrigger value="trendingTodayTrailers">Today</TabsTrigger>
              <TabsTrigger value="trendingWeeklyTrailers">Weekly</TabsTrigger>
            </TabsList>
          </div>
          <div className="content-slider">
            <TabsContent value="trendingTodayTrailers">
              <div className="slider w-full flex py-6 px-12 gap-6 overflow-x-auto">
                {trendingTodayTrailersData.length > 0 ? (
                  trendingTodayTrailersData
                    .slice(0, 20)
                    .filter((element) => element.videos.results.length > 0)
                    .map((elem) => {
                      return (
                        <div
                          key={elem.id}
                          className="flex flex-col gap-2 items-center"
                        >
                          <div
                            onMouseEnter={() =>
                              setTrailerSectionCover(elem.backdrop_path)
                            }
                            onClick={() =>
                              triggerModal(
                                elem.videos.results.filter(
                                  (elem) => elem.type === "Trailer"
                                )[0].key
                              )
                            }
                            className="trailer relative w-80 h-48 flex-shrink-0 rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer"
                          >
                            <Image
                              src={`https://www.themoviedb.org/t/p/original/${elem.backdrop_path}`}
                              alt="Poster Image"
                              fill={true}
                              priority
                              sizes="(min-width: 640px) 50vw"
                              className="object-cover object-center"
                            />
                            <div className="img-cover absolute w-full h-full opacity-30 bg-black"></div>
                            <i className="ri-play-fill text-8xl text-white"></i>
                          </div>
                          <div className="info">
                            <Link
                              href={
                                elem.title
                                  ? `/movie/${elem.id}`
                                  : `/tv/${elem.id}`
                              }
                            >
                              <h1 className="text-base text-white font-semibold text-center">
                                {elem.title ? elem.title : elem.name}
                              </h1>
                            </Link>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <LoadingSkeleton cards={10} heigth={200} width={380} />
                )}
              </div>
            </TabsContent>
            <TabsContent value="trendingWeeklyTrailers">
              <div className="slider w-full flex py-6 px-12 gap-6 overflow-x-auto">
                {trendingWeeklyTrailersData.length > 0 ? (
                  trendingWeeklyTrailersData
                    .slice(0, 20)
                    .filter((element) => element.videos.results.length > 0)
                    .map((elem) => {
                      return (
                        <div
                          key={elem.id}
                          className="flex flex-col gap-2 items-center"
                        >
                          <div
                            onMouseEnter={() =>
                              setTrailerSectionCover(elem.backdrop_path)
                            }
                            onClick={() =>
                              triggerModal(
                                elem.videos.results.filter(
                                  (elem) => elem.type === "Trailer"
                                )[0].key
                              )
                            }
                            className="trailer relative w-80 h-48 flex-shrink-0 rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer"
                          >
                            <Image
                              src={`https://www.themoviedb.org/t/p/original/${elem.backdrop_path}`}
                              alt="Poster Image"
                              fill={true}
                              priority
                              sizes="(min-width: 640px) 50vw"
                              className="object-cover object-center"
                            />
                            <div className="img-cover absolute w-full h-full opacity-30 bg-black"></div>
                            <i className="ri-play-fill text-8xl text-white"></i>
                          </div>
                          <div className="info">
                            <Link
                              href={
                                elem.title
                                  ? `/movie/${elem.id}`
                                  : `/tv/${elem.id}`
                              }
                            >
                              <h1 className="text-base text-white font-semibold">
                                {elem.title ? elem.title : elem.name}
                              </h1>
                            </Link>
                          </div>
                        </div>
                      );
                    })
                ) : (
                  <LoadingSkeleton cards={10} heigth={200} width={380} />
                )}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>
      <section className="free-to-watch w-full pt-6">
        <TabsAndSlider
          headerMain={"Free To Watch"}
          triggerHeader1={"Movies"}
          triggerHeader2={"TV"}
          dataPrimary={FreeMoviesData}
          dataSecondary={FreeTVData}
        />
      </section>
    </main>
  );
}
