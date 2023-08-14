import Image from "next/image";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import { Card, CardHeader, CardFooter, CardTitle } from "./ui/card";

const ImageCard = ({ elem }) => {
  return (
    <Card className="lg:w-52 sm:w-56 w-full flex-shrink-0">
      <Link href={elem.title ? `/movie/${elem.id}` : `/tv/${elem.id}`}>
        <CardHeader className="w-full relative lg:h-80 md:h-96 h-[28rem] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original/${elem.poster_path}`}
            alt="Poster Image"
            layout="fill"
            sizes="(min-width: 786px) 25vw"
            className="inline-block object-center transition-all hover:scale-105"
          />
        </CardHeader>
      </Link>
      <CardFooter className="relative flex-col items-start gap-2 pt-6">
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
          <CardTitle className="leading-5 hover:text-blue-400">
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
