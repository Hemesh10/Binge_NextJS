import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between py-3 2xl:px-36 xl:px-24 lg:px-16 px-6">
      <div className="nav-left">
        <div className="nav-content flex items-center gap-8 text-white">
          <Link href={"/"} className="flex gap-2 items-baseline">
            <h1 className="text-3xl font-bold tracking-widest bg-clip-text bg-gradient-to-r text-transparent from-green-300 to-sky-400">
              TMDB
            </h1>
            <span className="w-16 h-6 rounded-full bg-gradient-to-r from-green-200 to-sky-500"></span>
          </Link>
          <div class="group inline-block relative">
            <button class="text-base font-semibold rounded inline-flex items-center">
              <span class="mr-1">Movies</span>
            </button>
            <ul class="absolute z-[100!important] hidden w-max text-gray-700 pt-1 group-hover:block">
              <li class="">
                <Link
                  class="rounded-t bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                  href={`/movie/popular`}
                >
                  Popular
                </Link>
              </li>
              <li class="">
                <Link
                  class="bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                  href={`/movie/now-playing`}
                >
                  Now Playing
                </Link>
              </li>
              <li class="">
                <Link
                  class="bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                  href={`/movie/upcoming`}
                >
                  Upcoming
                </Link>
              </li>
              <li class="">
                <Link
                  class="rounded-b bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                  href={`/movie/top-rated`}
                >
                  Top Rated
                </Link>
              </li>
            </ul>
          </div>
          <div class="group inline-block relative">
            <button class="text-base font-semibold rounded inline-flex items-center">
              <span class="mr-1">TV Shows</span>
            </button>
            <ul class="absolute z-[100!important] hidden w-max text-gray-700 pt-1 group-hover:block">
              <li class="">
                <Link
                  class="rounded-t bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                  href={`/tv/popular`}
                >
                  Popular
                </Link>
              </li>
              <li class="">
                <Link
                  class="bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                  href={`/tv/airing-today`}
                >
                  Airing Today
                </Link>
              </li>
              <li class="">
                <Link
                  class="bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                  href={`/tv/on-the-air`}
                >
                  On TV
                </Link>
              </li>
              <li class="">
                <Link
                  class="rounded-b bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                  href={`/tv/top-rated`}
                >
                  Top Rated
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-right"></div>
    </nav>
  );
};

export default Navbar;
