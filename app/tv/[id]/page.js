"use client";
import {
  asyncIndividualTV,
  asyncIndividualTVCastAndCrew,
  individualTV,
  TV_CastAndCrew,
} from "@/store/Actions/index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Image from "next/image";
import noImage from "@/public/images/alternateImages/noImage.svg";
import LoadingComponent from "@/components/LoadingComponent";

const IndividualTV = ({ params }) => {
  const { IndividualTVData, tvTrailerKeys, tvCastAndCrew, tvUserScore } =
    useSelector((state) => state.IndividualTVReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncIndividualTV(params.id));
    dispatch(asyncIndividualTVCastAndCrew(params.id));

    return () => {
      dispatch(individualTV([]));
      dispatch(TV_CastAndCrew([]));
    };
  }, []);

  const [modal, setModal] = useState(false);

  // console.log(IndividualTVData);
  return (
    <>
      {Object.keys(IndividualTVData).length > 0 ? (
        <section key={IndividualTVData.id} className="wrapper w-full">
          <section className="backdrop-poster relative w-full min-h-[80vh]">
            <Image
              src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces//${IndividualTVData.backdrop_path}`}
              alt="Backdrop Poster"
              fill={true}
              sizes="(min-width: 640px) 75vw"
              className="object-cover"
              priority
            />
            <div className="backdrop-cover absolute top-0 w-full h-full opacity-50"></div>
            <div className="details-and-poster flex items-center absolute z-10 top-0 w-full h-full 2xl:pl-36 xl:pl-24 lg:pl-16 pl-6">
              <div className="poster relative w-[19rem] h-[85%] rounded-lg overflow-hidden">
                <Image
                  src={
                    IndividualTVData.poster_path
                      ? `https://www.themoviedb.org/t/p/original/${IndividualTVData.poster_path}`
                      : noImage
                  }
                  alt="Poster"
                  fill={true}
                  sizes="(min-width: 640px) 40vw"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRqIEAABXRUJQVlA4WAoAAAAgAAAAgQAAwgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggtAIAABAXAJ0BKoIAwwA+MRiKRCIhiBJmEAGCWlu/HxhvfLODEfZ2xXHiDnpX/90AnW6nGNQAK2t+xgOJxxK6PBCUKcWEmYcOB5cAwXNIHUzquNE4L0qi0ZRxym/2iOYTxQ10fRqfxmuk7/ySYqF9A66k0boC2Bvr4Kbmhu3MkZZd6REMn9HHHjfhCCzKH5ODRkrAsDt/FI9Sn/7eAdMZtN0P4Xl3LWXTK6mF5FrRD///vAbsiaRWvilZbppNtTv6mqKma0AA/u/pjwv//M0f+wP++TwP/xX6y+VPYa26kR4AGEgU+9qJWUD3LD84gdwn81fy4lgP5lhXRYhwmF4APcIKqhkqPkDnh9n32q7zNoecC0VVMDxYxNRq/YH0Ljs0fXbeHFgwgzz+dBzI1uJoZHxMfCExYkiwueU2euGWapV7TZxn577ePW0/qnJXInXL63T66sPP+BA+r3AYpyvaFBxZwnU7jBxR6hiAWGeXiND+60z8TAhp5Lzm0AAnyHoZ7E4EYtl93Ds44qxroGNtOCamwDmIlsbm8Rir1D5cVYfk/TMDBvXkUsGJk5i+tJane3jpM/zbtTc2MJJQ4+5QfozOBsHVj/aRVGYQxhVFRNOhWrMuVJKYb+MpvDAPFDBixDwNlBCtk0X9rRAr3qVbFuE0rRyzTzvMgRVG6BwQBOIkmDa2JdhYEnvJLAcFh2YGONCgl858dFxkImexXdOjV8M5NSzYGJZsZyJTDthcKZn16tmMF9yzOWPDjjuAbkjEBj5PI53BRfvG8ZTOhEWVZYp4jpvyiyeO+gHql3hOyUyjFjjwL9jX6A0jvICkkhVf1LfTRD6BBovwkmB7AvWo8mdwEh8jbMiR13oPZ+znEXNVDe1ljPtR5I7V03oSV+85SCMPA97BPfWlAm4MWrmHOwv2BDzOAAAA"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="details flex flex-col flex-wrap justify-center max-w-[65vmax] h-full pl-8 gap-6 text-white">
                <div className="header">
                  <div className="header-title">
                    <h1 className="text-4xl font-semibold">
                      <span>{IndividualTVData.name}</span>
                      {IndividualTVData.first_air_date && (
                        <span className="opacity-75 font-normal ml-4">
                          ({IndividualTVData.first_air_date.split("-")[0]})
                        </span>
                      )}
                    </h1>
                  </div>
                  <div className="header-info flex items-center text-base font-normal opacity-90 text gap-3">
                    <p>
                      {IndividualTVData.first_air_date.split("-").join("/")}
                    </p>

                    {"•"}
                    <p>
                      {IndividualTVData.genres
                        .map((elem) => elem.name)
                        .join(", ")}
                    </p>
                    {/* {"•"}
                    <p>{IndividualTVData.runtime} mins</p> */}
                  </div>
                </div>
                <div className="actions-and-userScore flex items-center gap-6">
                  <div className="realtive user-score flex items-center gap-4">
                    <div className="score-progress-bar relative flex items-center justify-center w-16 h-16 rounded-full bg-black">
                      <p className="text-xl font-medium">
                        {tvUserScore}
                        <sup className="text-xs">%</sup>
                      </p>
                      <CircularProgress
                        variant="determinate"
                        color="success"
                        value={tvUserScore}
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
                            src={`https://www.youtube.com/embed/${tvTrailerKeys[0]}?autoplay=1`}
                            allow="autoplay"
                            frameborder="0"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    </Modal>
                    <span className="trailer-btn">
                      {tvTrailerKeys.length > 0 && (
                        <Button onClick={() => setModal(true)}>
                          Play Trailer
                        </Button>
                      )}
                    </span>
                  </div>
                </div>
                {IndividualTVData.tagline ? (
                  <div className="tagline mt-1">
                    <h1 className="text-lg font-normal italic opacity-90">
                      {IndividualTVData.tagline}
                    </h1>
                  </div>
                ) : null}
                {IndividualTVData.overview ? (
                  <div className="overview">
                    <div className="overview-header">
                      <h1 className="text-xl font-semibold leading-none">
                        Overview
                      </h1>
                    </div>
                    <div className="overview-content">
                      <p className="text-base leading-tight font-normal mt-2">
                        {IndividualTVData.overview}
                      </p>
                    </div>
                  </div>
                ) : null}
                <div className="creators flex gap-12 mt-2">
                  {IndividualTVData.created_by.map((elem) => {
                    return (
                      <div className="creator">
                        <h1 className="text-base font-bold leading-none">
                          {elem.name}
                        </h1>
                        <p className="text-sm">Creator</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="cast-and-other-dets flex justify-between w-full py-4">
            <div className="cast flex flex-col pl-14 py-4 max-w-[75%] gap-2">
              <div className="header ml-4">
                <h1 className="text-2xl font-medium">Top Billed Cast</h1>
              </div>
              <div className="slider flex w-full bg-white px-4 pt-2 pb-4 gap-4 overflow-x-auto">
                {tvCastAndCrew.length > 0 ? (
                  tvCastAndCrew.map((elem, index) => {
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
                              fill={true}
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
                              fill={true}
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
                ) : tvCastAndCrew.length > 0 ? (
                  <LoadingSkeleton
                    cards={tvCastAndCrew.length < 5 ? tvCastAndCrew.length : 5}
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
                    {IndividualTVData.original_name}
                  </span>
                </h1>
              </div>
              <div className="status leading-none">
                <h1 className="text-base font-semibold">Status</h1>
                <p>{IndividualTVData.status}</p>
              </div>
              {IndividualTVData.networks.length > 0 ? (
                <>
                  <h1 className="text-base font-semibold leading-none">
                    Network
                  </h1>
                  <ul className="networks flex flex-col gap-1 -mt-2">
                    {IndividualTVData.networks.map((elem) => {
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
              ) : null}
              <div className="og-lang leading-none">
                <h1 className="text-base font-semibold">Original Language</h1>
                {IndividualTVData.original_language === "en" ? (
                  <p>English</p>
                ) : (
                  <p>NA</p>
                )}
              </div>
              <div className="type leading-none">
                <h1 className="text-base font-semibold">Type</h1>
                {IndividualTVData.type ? (
                  <p>{IndividualTVData.type}</p>
                ) : (
                  <p>NA</p>
                )}
              </div>
            </div>
          </section>
        </section>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default IndividualTV;
