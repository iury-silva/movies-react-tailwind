import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [api_key]);

  const splideOptions = {
    type: "loop",
    autoplay: true,
    interval: 3000,
    lazyLoad: "nearby",
    arrows: false,
    pagination: false,
  };

  return (
    <>
      <Splide options={splideOptions}>
        {movies.map((item) => (
          <SplideSlide key={item.id}>
            <div style={{ position: "relative" }}>
              <img
                data-splide-lazy={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                style={{
                  width: "100%",
                  height: "50rem",
                  objectFit: "cover",
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                }}
                alt=""
              />
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: "40%",
                  marginLeft: "5rem",
                  zIndex: "2",
                }}
              >
                <h1
                  style={{
                    marginBottom: "2rem",
                    fontSize: "50px",
                    fontWeight: "bolder",
                    width: "50%"
                  }}
                >
                  {item.title}
                </h1>
                <p style={{ width: "50%", textAlign: "justify" }}>
                  {item.overview}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-b from-transparent to-[#242424]"></div>{/* Adicione a div para a vinheta */}
            <img
          className='absolute z-10 right-80 top-[25%] rounded-xl w-60'
          src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
          alt={item.title}
        />
            </div>
          </SplideSlide>
        ))}
        
      </Splide>
      <section className="relative">

        <p className="text-4xl text-center font-semibold font pt-16">Popular Movies</p>
        <div className="w-4/5 mx-auto mt-10 mb-10">
            <div className="flex flex-wrap gap-8 gap-y-16 justify-center mx-auto">
              {
                movies.map((item) => (
                  <MovieCard key={item.id} movie={item}/>
                ))
              }
            </div>
        </div>
      </section>
      {/* <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mt-8">
          {movies.map((item) => (
            <div
              key={item.id}
              style={{ marginRight: "1rem" }}
            >
              <img
                style={{ width: "15rem" }}
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}
