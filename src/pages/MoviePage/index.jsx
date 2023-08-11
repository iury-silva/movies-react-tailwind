import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import axios from "axios";

export default function MoviePage() {
  const getParams = useParams();

  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${getParams.id}?api_key=${api_key}`)
      .then((res) => {
        setMovie(res.data);
      });
  }, []);
  
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${getParams.id}/videos?api_key=${api_key}`)
      .then((res) => {
        setVideo(res.data.results[0]);
      });
  }, []);

  return (
    <>
    <section className="relative">
      <div className="relative">
        <img
              className='w-full h-full'
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
        />
        <div className="absolute top-0 bg-[#242424]/80 w-full h-full"></div>
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-b from-transparent to-[#242424]"></div>
      </div>
      <div className="absolute top-0 z-10 w-full flex pl-28 mt-48">
        <div className="flex">
          <img
              className='rounded-xl hover:cursor-pointer duration-700 ease-in-out w-96 mr-16'
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="w-[30%] mr-56 flex flex-col">
              <p className="text-3xl mb-8">
                { movie.original_title }
              </p>
              <p className="text-lg font-light text-justify">
                { movie.overview }
              </p>

              <div className="mt-20 flex gap-5">
                <a href={movie.homepage} className="border p-5 border-sky-500 rounded-xl hover:bg-sky-500 duration-150 cursor-pointer transition ease-in-out w-auto h-14 flex justify-center items-center" target="_blank">Go to site</a>

                <button 
                className="bg-sky-500 p-5 rounded-xl hover:bg-sky-600 duration-300 cursor-pointer transition ease-in-out w-auto h-14 flex justify-center items-center"
                onClick={() => setOpen(true)}
                >
                  Watch Trailer
                </button>
              </div>
            </div>
        </div>

      </div>
    </section>

  
    <Modal
      isOpen={isOpen}
      video={video.key}
      setOpenModal={() => setOpen(!isOpen)}
    />
        
    </>
  )
}