"use client";
import { asyncIndividualMovie } from "@/store/Actions/MoviesActions/IndividualMovie/IndividualMovieActions";
import { asyncIndividualMovieCastAndCrew } from "@/store/Actions/MoviesActions/IndividualMovie/IndividualMovieActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@mui/material";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Modal from "@mui/material/Modal";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Image from "next/image";

const IndividualMovie = ({ params }) => {
  const {
    IndividualMovieData,
    movieTrailerKeys,
    movieUserScore,
    movieCastAndArew,
  } = useSelector((state) => state.IndividualMovieReducers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncIndividualMovie(params.id));
    dispatch(asyncIndividualMovieCastAndCrew(params.id));
  }, []);

  const [modal, setModal] = useState(false);

  console.log(IndividualMovieData);

  //TODO fix this (make it responsive)

  return (
    <>
      {Object.keys(IndividualMovieData).length > 0 ? (
        <section className="wrapper w-full">
          <section className="backdrop-poster relative w-full min-h-[80vh]">
            <Image
              src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//${IndividualMovieData.backdrop_path}`}
              alt="Backdrop Poster"
              layout="fill"
              className="object-cover"
              priority
            />
            <div className="backdrop-cover absolute top-0 w-full h-full bg-black opacity-50"></div>
            <div className="details-and-poster flex items-center absolute z-10 top-0 w-full h-full 2xl:pl-36 xl:pl-24 lg:pl-16 pl-6">
              <div className="poster relative w-[19rem] h-[85%] rounded-lg overflow-hidden">
                <Image
                  src={`https://www.themoviedb.org/t/p/original/${IndividualMovieData.poster_path}`}
                  alt="Poster"
                  layout="fill"
                  // sizes="(min-width: 200px) 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="details flex flex-col flex-wrap justify-center max-w-[65vmax] h-full pl-8 gap-6 text-white">
                <div className="header">
                  <div className="header-title">
                    <h1 className="text-4xl font-semibold flex gap-4">
                      <span>{IndividualMovieData.title}</span>
                      <span className="opacity-75 font-normal">
                        ({IndividualMovieData.release_date.split("-")[0]})
                      </span>
                    </h1>
                  </div>
                  <div className="header-info flex items-center text-base font-normal opacity-90 text gap-3">
                    <p>
                      {IndividualMovieData.release_date.split("-").join("/")}
                    </p>

                    {"•"}
                    <p>
                      {IndividualMovieData.genres
                        .map((elem) => elem.name)
                        .join(", ")}
                    </p>
                    {/* {"•"}
                    <p>{IndividualMovieData.runtime} mins</p> */}
                  </div>
                </div>
                <div className="actions-and-userScore flex items-center gap-6">
                  <div className="realtive user-score flex items-center gap-4">
                    <div className="score-progress-bar relative flex items-center justify-center w-16 h-16 rounded-full bg-black">
                      <p className="text-xl font-medium">
                        {movieUserScore}
                        <sup className="text-xs">%</sup>
                      </p>
                      <CircularProgress
                        variant="determinate"
                        color="success"
                        value={movieUserScore}
                        size={64}
                        className="absolute"
                      />
                    </div>
                    <div className="score-text">
                      <h1>User</h1>
                      <h1>Score</h1>
                    </div>
                  </div>
                  <div className="trailer-action">
                    <Modal open={modal} onClose={() => setModal(false)}>
                      <div className="player-wrapper w-[85%] h-[80%] absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-black">
                        <div className="player-header text-white w-full flex justify-between items-center py-1 px-4">
                          <h1 className="text-lg font-normal">Play Trailer</h1>
                          <Button onClick={() => setModal(false)}>
                            <p className="font-normal">X</p>
                          </Button>
                        </div>
                        <div className="player w-full h-full">
                          <iframe
                            src={`https://www.youtube.com/embed/${movieTrailerKeys[0]}?autoplay=1`}
                            allow="autoplay"
                            frameborder="0"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </Modal>
                    <span className="trailer-btn">
                      {movieTrailerKeys.length > 0 && (
                        <Button onClick={() => setModal(true)}>
                          Play Trailer
                        </Button>
                      )}
                    </span>
                  </div>
                </div>
                {IndividualMovieData.tagline ? (
                  <div className="tagline mt-1">
                    <h1 className="text-lg font-normal italic opacity-90">
                      {IndividualMovieData.tagline}
                    </h1>
                  </div>
                ) : null}
                {IndividualMovieData.overview ? (
                  <div className="overview">
                    <div className="overview-header">
                      <h1 className="text-xl font-semibold leading-none">
                        Overview
                      </h1>
                    </div>
                    <div className="overview-content">
                      <p className="text-base leading-tight font-normal mt-2">
                        {IndividualMovieData.overview}
                      </p>
                    </div>
                  </div>
                ) : null}
                {/* <div className="creators flex gap-12 mt-2">
                  {IndividualMovieData.created_by.map((elem) => {
                    return (
                      <div className="creator">
                        <h1 className="text-base font-bold leading-none">
                          {elem.name}
                        </h1>
                        <p className="text-sm">Creator</p>
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>
          </section>
          <section className="cast-and-other-dets flex justify-between w-full py-4">
            <div className="cast flex flex-col pl-14 py-4 max-w-[75%] gap-2">
              <div className="header ml-4">
                <h1 className="text-2xl font-medium">Top Billed Cast</h1>
              </div>
              <div className="slider flex w-full bg-white px-4 pt-2 pb-4 gap-4 overflow-x-auto">
                {movieCastAndArew.length > 0 ? (
                  movieCastAndArew.map((elem, index) => {
                    return (
                      <Card
                        key={index}
                        className="lg:w-[180px] md:w-[180px] sm:w-[180px] max-h-[22rem] flex-shrink-0"
                      >
                        <CardHeader className="lg:h-64 relative overflow-hidden">
                          {elem.profile_path ? (
                            <Image
                              src={`https://www.themoviedb.org/t/p/original/${elem.profile_path}`}
                              alt=""
                              layout="fill"
                              sizes="(min-width: 100px) 10vw"
                              className="inline-block w-full h-full"
                            />
                          ) : (
                            <Image
                              src={
                                elem.gender === 1
                                  ? `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg`
                                  : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`
                              }
                              alt=""
                              layout="fill"
                              sizes="(min-width: 100px) 10vw"
                              className="inline-block w-full h-full"
                            />
                          )}
                        </CardHeader>
                        <CardFooter>
                          <CardTitle>
                            <h1 className="text-base leading-tight">
                              {elem.name}
                            </h1>
                            <p className="text-sm text font-normal mt-1 text-gray-500">
                              {elem.character}
                            </p>
                          </CardTitle>
                        </CardFooter>
                      </Card>
                    );
                  })
                ) : movieCastAndArew.length > 0 ? (
                  <LoadingSkeleton
                    cards={
                      movieCastAndArew.length < 5 ? movieCastAndArew.length : 5
                    }
                    heigth={250}
                    width={180}
                  />
                ) : (
                  <h1 className="text-lg font-medium">
                    No Cast Information Available for this movie 😕
                  </h1>
                )}
              </div>
            </div>
            <div className="status-sec flex flex-col min-w-[25%] pl-10 pt-16 gap-4">
              <div className="header text-xl font-semibold leading-none">
                Facts
              </div>
              <div className="original-name">
                <h1 className="flex flex-col">
                  <span className="text-base font-semibold">Original Name</span>
                  <span className="text-base font-medium">
                    {IndividualMovieData.original_name}
                  </span>
                </h1>
              </div>
              <div className="status leading-none">
                <h1 className="text-base font-semibold">Status</h1>
                <p>{IndividualMovieData.status}</p>
              </div>
              {/* {IndividualMovieData.networks.length > 0 ? (
                <>
                  <h1 className="text-base font-semibold leading-none">
                    Network
                  </h1>
                  <ul className="networks flex flex-col gap-1 -mt-2">
                    {IndividualMovieData.networks.map((elem) => {
                      return (
                        <li key={elem.id}>
                          <img
                            src={`https://www.themoviedb.org/t/p/h30${elem.logo_path}`}
                            alt=""
                          />
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : null} */}
              <div className="og-lang leading-none">
                <h1 className="text-base font-semibold">Original Language</h1>
                {IndividualMovieData.original_language === "en" ? (
                  <p>English</p>
                ) : (
                  <p>NA</p>
                )}
              </div>
              <div className="budget leading-none">
                <h1 className="text-base font-semibold">Budget</h1>
                {IndividualMovieData.budget > 0 ? (
                  <p>$ {IndividualMovieData.budget}</p>
                ) : (
                  <p className="opacity-80">NA</p>
                )}
              </div>
              <div className="revenue leading-none">
                <h1 className="text-base font-semibold">Revenue</h1>
                {IndividualMovieData.revenue > 0 ? (
                  <p>$ {IndividualMovieData.revenue}</p>
                ) : (
                  <p className="opacity-80">NA</p>
                )}
              </div>
              {/* <div className="type leading-none">
                <h1 className="text-base font-semibold">Type</h1>
                {IndividualMovieData.type ? (
                  <p>{IndividualMovieData.type}</p>
                ) : (
                  <p>NA</p>
                )}
              </div> */}
            </div>
          </section>
        </section>
      ) : (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1>Loading...</h1>
        </span>
      )}
    </>
  );
};

export default IndividualMovie;

// adult: false;
// cast_id: 705;
// character: "Miles Morales / Spider-Man (voice)";
// credit_id: "6489a4f8e375c000e251ab48";
// gender: 2;
// id: 587506;
// known_for_department: "Acting";
// name: "Shameik Moore";
// order: 0;
// original_name: "Shameik Moore";
// popularity: 11.809;
// profile_path: "/uJNaSTsfBOvtFWsPP23zNthknsB.jpg";
