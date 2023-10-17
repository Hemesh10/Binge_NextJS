"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { changeSearchBarState } from "@/store/Reducers/HomePage/SearchBar/SearchBarReducer";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { showSearchBar } = useSelector((state) => state.SearchBarReducer);
  const dispatch = useDispatch();

  const [openDropDown, setOpenDropDown] = useState(false);

  const handleSearchBarDisplay = () => {
    dispatch(changeSearchBarState(!showSearchBar));
  };

  return (
    <>
      {/* mobile navigation */}
      <nav className="mobile-nav flex sm:hidden py-2 px-4 justify-between">
        <div className="left">
          <DropdownMenu
            open={openDropDown}
            onOpenChange={setOpenDropDown}
            className="w-16"
          >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0  ">
                <i className="ri-menu-line text-white text-xl"></i>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Movies</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Link
                        href={`/movie/popular`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Popular
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={`/movie/now-playing`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Now Playing
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={`/movie/upcoming`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Upcoming
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={`/movie/top-rated`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Top Rated
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>TV</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Link
                        href={`/tv/popular`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Popular
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={`/tv/airing-today`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Airing Today
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={`/tv/on-the-air`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        On TV
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href={`/tv/top-rated`}
                        onClick={() => setOpenDropDown(false)}
                      >
                        Top Rated
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="right">
          <Link href={"/"} className="flex gap-2 items-baseline">
            <h1 className="text-2xl font-bold tracking-widest bg-clip-text bg-gradient-to-r text-transparent from-green-300 to-sky-400">
              IMDB
            </h1>
            <span className="w-12 h-4 rounded-full bg-gradient-to-r from-green-200 to-sky-500"></span>
          </Link>
        </div>
      </nav>

      {/* desktop/tab navigation */}
      <nav className="desktop-nav w-full hidden sm:flex justify-between items-center py-3 2xl:px-36 xl:px-24 lg:px-16 px-6">
        <nav className="nav-left">
          <div className="nav-content flex items-center gap-8 text-white">
            <Link href={"/"} className="flex gap-2 items-center">
              <h1 className="text-3xl font-semibold tracking-wide bg-clip-text bg-gradient-to-r text-transparent from-green-300 to-sky-400">
                AMTDB
              </h1>
              <span className="w-16 h-5 rounded-full bg-gradient-to-r from-green-200 to-sky-500 translate-y-[2px]"></span>
            </Link>
            <div className="group z-[999] inline-block relative">
              <button className="text-base font-semibold rounded inline-flex items-center">
                <span className="mr-1">Movies</span>
              </button>
              <ul className="absolute z-[100!important] hidden w-max text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <Link
                    className="rounded-t bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                    href={`/movie/popular`}
                  >
                    Popular
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                    href={`/movie/now-playing`}
                  >
                    Now Playing
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                    href={`/movie/upcoming`}
                  >
                    Upcoming
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="rounded-b bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                    href={`/movie/top-rated`}
                  >
                    Top Rated
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group z-[999] inline-block relative">
              <button className="text-base font-semibold rounded inline-flex items-center">
                <span className="mr-1">TV Shows</span>
              </button>
              <ul className="absolute z-[100!important] hidden w-max text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <Link
                    className="rounded-t bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                    href={`/tv/popular`}
                  >
                    Popular
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                    href={`/tv/airing-today`}
                  >
                    Airing Today
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                    href={`/tv/on-the-air`}
                  >
                    On TV
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="rounded-b bg-white hover:bg-slate-100 py-2 px-4 block whitespace-no-wrap"
                    href={`/tv/top-rated`}
                  >
                    Top Rated
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="nav-right text-white">
          <button onClick={handleSearchBarDisplay}>
            <i className="ri-search-line text-xl text-[#41ccff] font-semibold"></i>
          </button>
        </div>
      </nav>
      {showSearchBar && <SearchBar handleSearchBarDisplay={handleSearchBarDisplay} />}
    </>
  );
};

export default Navbar;
