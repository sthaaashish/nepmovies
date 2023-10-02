import { List, ListItem } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import MovieItem from "../../components/MovieCard";
import { imageUrl } from "../../features/constants";
import {
 
  useGetMovieByCategoryQuery,
  useGetMoviesByGenreQuery,
} from "../../features/movieApi";
import Loading from "../Loading";
import MovieGenre from "./MovieGenre";

const Movies = () => {
  const {id}=useParams();
  // const {data, isLoading}=useGetMovieByCategoryQuery("now_playing");
  const {data, isLoading}=useGetMoviesByGenreQuery(id);

  const nav = useNavigate();


  if (isLoading ) {
    return <Loading />;
  }


  return (
    <>

    <div className="flex">
      <MovieGenre />
     
      <div className="w-3/4">
        <div className="grid grid-cols-4  msm:grid-cols-2 mmd:grid-cols-3 mlg:grid-cols-4 gap-2">
          {data  &&
            data ?.results.map((movie) => {
              const releaseYear = movie.release_date.split("-")[0];
             
              return (
                <MovieItem
                  key={movie.id}
                  movie={movie}
                  handleClick={() => {
                    nav(`/Details/${movie.id}`);
                  }}
                  releaseYear={releaseYear}
                />
              );
            })}
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
      </div>
    </div>
    </>
  );
};

export default Movies;
