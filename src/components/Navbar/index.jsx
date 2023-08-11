import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("")

  const api_key = import.meta.env.VITE_API_KEY

  function goTo(path) {
    navigate(path);
  }

  const SearchQuery = (event) => {
    if(event.key == "Enter") {
        navigate("/search?query=" + search)
        setSearch("")
    }
  }

  return (
    <>
      <nav className="fixed top-0 z-30 w-full bg-slate-700 shadow-black/40 shadow-lg ">
        
        <div className="flex justify-between items-center  p-3 bg mx-16">
          <a onClick={() => goTo("/")} className="d-flex items text-2xl font-semibold cursor-pointer">Iury<span className="text-sky-400 ">Flix</span></a>
          

            <div className="flex">
              <div className="relative flex items-center">
                <AiOutlineSearch className="absolute fill-sky-400 ml-3 " size={20}/>
                <input placeholder="Search" type="text" className="rounded-xl mr-4 w-64 h-7 pl-10 bg-white/5 focus:ring-2 border-none focus:outline-none  focus:ring-offset-rose-500" onChange={(e) => setSearch(e.target.value)} onKeyDown={SearchQuery} value={search} />
              </div>

              <button onClick={() => goTo("/about")} className="mr-3">
                Top Rated
              </button>

              <button onClick={() => goTo("/")} className=" hover:shadow-xl">
                Home
              </button>
            </div>
        
        </div>

      </nav>
    </>
  );
}
