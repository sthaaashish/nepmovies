import React from "react";
import { useNavigate } from "react-router";
import MovieCard from "../../components/MovieCard";
import { imageUrl } from "../../features/constants";
import { useGetTvByCategoryQuery } from "../../features/movieApi";
import Loading from "../Loading";
import TvShowsGenre from "./TvShowsGenre";

const TvShows = () => {
  const nav = useNavigate();
  const { data, error, isLoading } = useGetTvByCategoryQuery("top_rated");
  if (error) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex">
        <TvShowsGenre />

        <div className="w-3/4">
          <div className="grid grid-cols-4  msm:grid-cols-2 mmd:grid-cols-3 mlg:grid-cols-4 gap-2">
            {data &&
              data?.results.map((tvshows) => {
                const releaseYear = tvshows.first_air_date?.split("-")[0];

                return (
                  <div
                    onClick={() => nav(`/tvshowsDetail/${tvshows.id}`)}
                    className="text-white p-4"
                  >
                    <MovieCard
                      movie={tvshows}
                      releaseYear={releaseYear}
                      handleClick={() => {
                        nav(`/Details/${tvshows.id}`);
                      }}
                    />
                  </div>
                );
              })}
          </div>
          <div className="flex flex-row items-center justify-center space-x-4 text-white">
            <button className="bg-blue-700 px-3 py-2 rounded-md">Prev</button>
            <span className="text-xl font-bold">{data.page}</span>
            <button
              onClick={() =>
                nav(`/TvShowPagination/top_rated/${data.page + 1}`)
              }
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

export default TvShows;
