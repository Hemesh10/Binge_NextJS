"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = ({ initialValue }) => {
  const router = useRouter();
  const [search, setSearch] = useState(initialValue);

  const submitHandler = (event) => {
    event.preventDefault();
    router.push(`/search?query=${event.target.search_q.value}`);
  };

  return (
    <section className="search-bar w-full h-10 2xl:px-36 xl:px-24 lg:px-16 px-6 border-b-[1px] border-slate-300">
      <div className="form-container w-[75%] h-full flex gap-2">
        <div className="search-icon flex items-center">
          <i className="ri-search-line font-semibold"></i>
        </div>
        <form onSubmit={submitHandler} className="w-full h-full">
          <input
            className="px-4 border-none outline-none text-lg italic text-gray-400"
            type="text"
            name="search_q"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
