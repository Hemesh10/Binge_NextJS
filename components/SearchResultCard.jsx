import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const SearchResultCard = ({ elem, index }) => {
  return (
    <div className="main-card w-full">
      <Card className="flex w-full">
        <CardHeader className="relative 2xl:w-[12%] w-[16%] h-56 bg-slate-100">
          <Link
            href={
              elem.media_type === "movie"
                ? `/movie/${elem.id}`
                : `/tv/${elem.id}`
            }
          >
            <Image
              src={
                elem.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${elem.poster_path}`
                  : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
              }
              alt="SomeImage"
              layout="fill"
              className="inline-block object-cover object-center"
            />
          </Link>
        </CardHeader>
        <CardFooter className="2xl:w-[88%] w-[84%] px-5 flex flex-col gap-4 items-start justify-center">
          <div className="title-and-rd">
            <CardTitle>
              <Link
                href={
                  elem.media_type === "movie"
                    ? `/movie/${elem.id}`
                    : `/tv/${elem.id}`
                }
              >
                <h1 className="text-lg font-semibold hover:text-slate-500">
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
            <p className="text-sm font-medium">{elem.overview}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SearchResultCard;
