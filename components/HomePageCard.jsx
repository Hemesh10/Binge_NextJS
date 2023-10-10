"use client";
import Image from "next/image";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import { Card, CardHeader, CardFooter } from "./ui/card";

const HomePageCard = ({ elem }) => {
  return (
    <Card
      key={elem.id}
      className="w-40 flex flex-col flex-shrink-0 bg-transparent border-none shadow-none"
    >
      <Link href={elem.title ? `/movie/${elem.id}` : `/tv/${elem.id}`}>
        <CardHeader className="relative w-full 2xl:h-60 h-64 rounded-b-xl overflow-hidden">
          <Image
            src={`https://www.themoviedb.org/t/p/original/${elem.poster_path}`}
            alt="Profile Image"
            priority
            fill={true}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRqIEAABXRUJQVlA4WAoAAAAgAAAAgQAAwgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggtAIAABAXAJ0BKoIAwwA+MRiKRCIhiBJmEAGCWlu/HxhvfLODEfZ2xXHiDnpX/90AnW6nGNQAK2t+xgOJxxK6PBCUKcWEmYcOB5cAwXNIHUzquNE4L0qi0ZRxym/2iOYTxQ10fRqfxmuk7/ySYqF9A66k0boC2Bvr4Kbmhu3MkZZd6REMn9HHHjfhCCzKH5ODRkrAsDt/FI9Sn/7eAdMZtN0P4Xl3LWXTK6mF5FrRD///vAbsiaRWvilZbppNtTv6mqKma0AA/u/pjwv//M0f+wP++TwP/xX6y+VPYa26kR4AGEgU+9qJWUD3LD84gdwn81fy4lgP5lhXRYhwmF4APcIKqhkqPkDnh9n32q7zNoecC0VVMDxYxNRq/YH0Ljs0fXbeHFgwgzz+dBzI1uJoZHxMfCExYkiwueU2euGWapV7TZxn577ePW0/qnJXInXL63T66sPP+BA+r3AYpyvaFBxZwnU7jBxR6hiAWGeXiND+60z8TAhp5Lzm0AAnyHoZ7E4EYtl93Ds44qxroGNtOCamwDmIlsbm8Rir1D5cVYfk/TMDBvXkUsGJk5i+tJane3jpM/zbtTc2MJJQ4+5QfozOBsHVj/aRVGYQxhVFRNOhWrMuVJKYb+MpvDAPFDBixDwNlBCtk0X9rRAr3qVbFuE0rRyzTzvMgRVG6BwQBOIkmDa2JdhYEnvJLAcFh2YGONCgl858dFxkImexXdOjV8M5NSzYGJZsZyJTDthcKZn16tmMF9yzOWPDjjuAbkjEBj5PI53BRfvG8ZTOhEWVZYp4jpvyiyeO+gHql3hOyUyjFjjwL9jX6A0jvICkkhVf1LfTRD6BBovwkmB7AvWo8mdwEh8jbMiR13oPZ+znEXNVDe1ljPtR5I7V03oSV+85SCMPA97BPfWlAm4MWrmHOwv2BDzOAAAA"
            sizes="(min-width: 640px) 15vw"
            className="object-cover object-center transition-all hover:scale-105"
          />
        </CardHeader>
      </Link>
      <CardFooter className="w-full relative flex flex-col items-start pt-9">
        <div className="score absolute -top-3 w-10 h-10 flex justify-center items-center rounded-full bg-teal-950">
          <CircularProgress
            variant="determinate"
            color="success"
            className="absolute"
            value={Math.floor(elem.vote_average * 10)}
          />
          <p className="text-sm font-semibold text-white">
            {Math.floor(elem.vote_average * 10)}
            <sup>
              <sup className="text-[.4rem] font-bold">%</sup>
            </sup>
          </p>
        </div>
        <Link href={elem.title ? `/movie/${elem.id}` : `/tv/${elem.id}`}>
          <h1 className="text-base font-bold hover:text-blue-400 leading-none">
            {elem.title ? elem.title : elem.name}
          </h1>
        </Link>
        <p className="opacity-80 text-sm font-normal mt-2">
          {elem.title ? elem.release_date : elem.first_air_date}
        </p>
      </CardFooter>
    </Card>
  );
};

export default HomePageCard;
