import React, { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchGifs = async () => {
    if (query.trim() === "") {
      return;
    }
    navigate(`/search/${query}`);

  };

  return (
    <div className="flex relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search all the GIFs"
        className="w-full pl-4 pr-14 py-5 text-xl text-black rounded-bl rounded-tl border border-gray-300 outline-none bg-white"
      />
      {
        query &&(
            <button onClick={()=>setQuery("")} className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6">
                <HiMiniXMark size={22}/>
            </button>
        )
      }
      <button
        onClick={()=>searchGifs()}
        className="bg-gradient-to-br from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
