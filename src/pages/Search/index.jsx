import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import axios from "axios";
import MovieCard from "../../components/MovieCard";

export default function Search() {

  const [getParams] = useSearchParams();
  const [movies, setMovies] = useState([])
  const api_key = import.meta.env.VITE_API_KEY;
  const query = getParams.get("query");

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results)
    })
  }, [query])

  return (
    <>
    <h2 className="mt-24 flex justify-start text-4xl font-bold ml-5 capitalize">Resultados para: {query}</h2>
    <div className="flex flex-wrap justify-center gap-8 gap-y-16 mx-auto mt-10">
        {
          movies.map(item => (
            <MovieCard movie={item} />
          ))
        }
    </div>
    </>
  )
}