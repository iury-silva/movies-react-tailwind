import PropTypes from 'prop-types';
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default function MovieCard({ movie }) {
  // console.log(movie);
  const navigate = useNavigate();

  function teste() {
    navigate(`/movie/${movie.id}`)
  }
  // const { title, poster_path, vote_average} = movie
  return (
    <>
    <div className='' onClick={teste}>
      <div className='mb-3 shadow-xl relative'>
        <img
          className='rounded-xl hover:cursor-pointer duration-700 ease-in-out w-60'
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
        <div className='absolute -right-3 -top-2 border backdrop-blur-3xl border-sky-500 rounded-full flex justify-center items-center w-10 h-10 z-20'>
          {Math.round(movie.vote_average)}
        </div>
        <p className='absolute font-semibold mt-2'>
          {movie.title}
        </p>
        <div className='absolute w-full bg-black/40 z-10 bottom-0 h-full rounded-xl opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex justify-center'>
          <button onClick={teste}>
            <AiOutlinePlayCircle className='text-7xl fill-sky-500' />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
