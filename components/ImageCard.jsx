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
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRg4EAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggIAIAAHAQAJ0BKoIAggA+tVqjTbw/sqwlmSrD8BaJY27f+axDt3hmJUgIH6icaov6xDi7C5b+eMZwtTVGlk9XRl01iBxRhostnSGrP5CfKP/+oEP/6G/////nwOFeTKt71c9n///7LZXxm2+q2XiLWsI586U/+azG8CPyhbxNProkmZWMy+kUK4L6XgZy+CwAAP7jrXwif5w5Q7hfxR1LZk91LPwSNBd/qO02yAs+atwR/trVXLxJVrxjOL4x77Kvgm5//szC/iRagMUwzMfQZ+o0RWH1IzQVVS0ByaJOlG5ErXj7WWSXKZzuLlZEHMgA0U3JeUOGE6Oqow0Ic/4Um+alClCi7PAw01RNs1C0IgBZ6AfekF9KVWId4aOoftORg78AlzLDwDGvSRjUUK5aUBijeoCyFrPf0Fw41FWhJsG0S5knv8Hjk4f4RKNmOgbxXqeJUVDjbonXlTeOOSqw68kuzKNOmSJXWCx/I0OYERM8lNMqqyEC7DMLHSTIRCeNVzvzT0FrTQyFKGQCfVhVgGbhc+knbQUg6cuzWpStb2cvwQU2MU4Oygr1rCEgGAZre/dsl9eG3+ZfD3RGzRj4mIzSse/i2oDor0x0S7mzyg0BGYXH8yuQ6XpRkN1mOC3WpGG3x9fd3ydWviNwyyPmP2ljW7DgLlhLe5ipKjSguaZohajh92jMvHk9Y70NTc2cXW+x10MRNPeAksE6GNSTtcAAAAA="
            className="inline-block object-center transition-all hover:scale-105"
            priority
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
