import Image from "next/image";
import Link from "next/link";
import noImage from "@/public/images/alternateImages/noImage.svg";
import { CircularProgress } from "@mui/material";
import { Card, CardHeader, CardFooter, CardTitle } from "./ui/card";

const ImageCard = ({ elem }) => {
  return (
    <Card className="lg:w-52 sm:w-56 w-72 flex-shrink-0">
      <Link href={elem.title ? `/movie/${elem.id}` : `/tv/${elem.id}`}>
        <CardHeader className="w-full relative lg:h-80 md:h-96 h-[28rem] overflow-hidden">
          <Image
            src={
              elem.poster_path
                ? `https://image.tmdb.org/t/p/original/${elem.poster_path}`
                : noImage
            }
            alt="Poster Image"
            fill={true}
            sizes="(min-width: 786px) 25vw"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRqIEAABXRUJQVlA4WAoAAAAgAAAAgQAAwgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggtAIAABAXAJ0BKoIAwwA+MRiKRCIhiBJmEAGCWlu/HxhvfLODEfZ2xXHiDnpX/90AnW6nGNQAK2t+xgOJxxK6PBCUKcWEmYcOB5cAwXNIHUzquNE4L0qi0ZRxym/2iOYTxQ10fRqfxmuk7/ySYqF9A66k0boC2Bvr4Kbmhu3MkZZd6REMn9HHHjfhCCzKH5ODRkrAsDt/FI9Sn/7eAdMZtN0P4Xl3LWXTK6mF5FrRD///vAbsiaRWvilZbppNtTv6mqKma0AA/u/pjwv//M0f+wP++TwP/xX6y+VPYa26kR4AGEgU+9qJWUD3LD84gdwn81fy4lgP5lhXRYhwmF4APcIKqhkqPkDnh9n32q7zNoecC0VVMDxYxNRq/YH0Ljs0fXbeHFgwgzz+dBzI1uJoZHxMfCExYkiwueU2euGWapV7TZxn577ePW0/qnJXInXL63T66sPP+BA+r3AYpyvaFBxZwnU7jBxR6hiAWGeXiND+60z8TAhp5Lzm0AAnyHoZ7E4EYtl93Ds44qxroGNtOCamwDmIlsbm8Rir1D5cVYfk/TMDBvXkUsGJk5i+tJane3jpM/zbtTc2MJJQ4+5QfozOBsHVj/aRVGYQxhVFRNOhWrMuVJKYb+MpvDAPFDBixDwNlBCtk0X9rRAr3qVbFuE0rRyzTzvMgRVG6BwQBOIkmDa2JdhYEnvJLAcFh2YGONCgl858dFxkImexXdOjV8M5NSzYGJZsZyJTDthcKZn16tmMF9yzOWPDjjuAbkjEBj5PI53BRfvG8ZTOhEWVZYp4jpvyiyeO+gHql3hOyUyjFjjwL9jX6A0jvICkkhVf1LfTRD6BBovwkmB7AvWo8mdwEh8jbMiR13oPZ+znEXNVDe1ljPtR5I7V03oSV+85SCMPA97BPfWlAm4MWrmHOwv2BDzOAAAA"
            className="inline-block object-center transition-all hover:scale-105"
            priority
          />
        </CardHeader>
      </Link>
      <CardFooter className="relative min-h-[6rem]  flex-col items-start justify-center gap-2 pt-6">
        <div className="score absolute -top-5 left-1 w-10 h-10 flex justify-center items-center rounded-full bg-teal-950">
          <CircularProgress
            variant="determinate"
            color="success"
            className="absolute"
            value={Math.floor(elem.vote_average * 10)}
          />
          <p className="text-sm font-semibold text-white">
            <span className="score-val">
              {Math.floor(elem.vote_average * 10)}
            </span>
            <sup>
              <sup className="text-[.4rem] font-bold">%</sup>
            </sup>
          </p>
        </div>
        <Link href={elem.title ? `/movie/${elem.id}` : `/tv/${elem.id}`}>
          <CardTitle className=" leading-5 hover:text-blue-400">
            {elem.title ? elem.title : elem.name}
          </CardTitle>
        </Link>
        <p className="text-sm font-medium leading-none opacity-60">
          {elem.release_date ? elem.release_date : elem.first_air_date}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
