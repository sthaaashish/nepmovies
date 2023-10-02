import React from "react";
import { useNavigate, useParams } from "react-router";
import MovieCard from "../../components/MovieCard";
import { imageUrl } from "../../features/constants";
import { useGetMovieByPageQuery } from "../../features/movieApi";
import Loading from "../Loading";
import MovieGenre from "./MovieGenre";

const MoviePagination = () => {
  const { page, category } = useParams();
  const nav = useNavigate();
  const { data, isLoading } = useGetMovieByPageQuery({
    category,
    page,
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
 
    <div className="flex">
      <div className="w-1/6">
        <MovieGenre/>
      </div>
      <div className="grid grid-cols-4  msm:grid-cols-2 mmd:grid-cols-2 mlg:grid-cols-3 gap-4 ">
        {data &&
          data?.results.map((movie) => {
            const releaseYear = movie.release_date.split("-")[0];

            return (
              <MovieCard movie={movie} handleClick={()=>nav(`/movieDetail/${movie.id}`)} releaseYear={releaseYear}/>
            );
          })}
      </div>
     
    </div>
     <div className="flex flex-row items-center justify-center space-x-4 text-white">
     <button className="bg-blue-700 px-3 py-2 rounded-md">Prev</button>
     <span className="text-xl font-bold">{data.page}</span>
     <button
       onClick={() => nav(`/moviepagination/now_playing/${data.page + 1}`)}
       className="bg-blue-700 px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300"
     >
       Next
     </button>
   </div>
   </>
  );
};

export default MoviePagination;
