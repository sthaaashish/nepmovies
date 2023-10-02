
import { imageUrl } from "../features/constants";
import { Image,  Shimmer} from 'react-shimmer'

const MovieCard = ({movie,handleClick,releaseYear, releaseTvYear}) => {
  return (
    <div
      key={movie.id}
      className="  text-white p-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={() => handleClick(`/Details/${movie.id}`)}
    >
     

     <div className="border-2 border-white rounded-md">
      <Image
        
        src={`${imageUrl}${movie.poster_path}`}
        alt={movie.title}
      fallback={<Shimmer  className="object-cover  w-72 h-90 " />}
        className="object-cover   w-72 h-90"
      />
      </div>
      <h1 className="text-lg  mt-2">{movie.title || movie.name}</h1>

      <p>{releaseYear }</p>
    </div>
  );
};

export default MovieCard;












