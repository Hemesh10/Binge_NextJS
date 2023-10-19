import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const SearchResultCard = ({ elem, index }) => {
  return (
    <div key={index} className="main-card">
      <Card className="flex h-[180px] sm:h-[220px]">
        <CardHeader className="relative 2xl:w-[12%] sm:w-[16%] w-[35%] bg-slate-100">
          <Link
            href={
              elem.media_type === "movie"
                ? `/movie/${elem.id}`
                : `/tv/${elem.id}`
            }
            className="relative h-full"
          >
            <Image
              src={
                elem.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${elem.poster_path}`
                  : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
              }
              alt="Poster Image"
              sizes="(min-width: 640px) 25vw"
              fill={true}
              className="inline-block object-cover object-center"
            />
          </Link>
        </CardHeader>
        <CardFooter className="2xl:w-[88%] sm:w-[84%] w-[65%] px-4 items-start justify-center flex flex-col gap-2 sm:gap-4">
          <div className="title-and-rd">
            <CardTitle>
              <Link
                href={
                  elem.media_type === "movie"
                    ? `/movie/${elem.id}`
                    : `/tv/${elem.id}`
                }
              >
                <h1 className="text-base sm:text-lg font-semibold leading-tight hover:text-slate-500">
                  {elem.media_type === "movie" ? elem.title : elem.name}
                </h1>
              </Link>
            </CardTitle>
            <p className="opacity-80 text-sm">
              {elem.media_type === "movie"
                ? elem.release_date
                : elem.first_air_date}
            </p>
          </div>
          <div className="overview">
            <p className="hidden sm:block text-sm font-medium">
              {elem.overview}
            </p>
            <p className="block sm:hidden text-sm font-medium">
              {elem.overview?.slice(0, 75)}...
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SearchResultCard;
