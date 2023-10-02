import React from "react";
import { useNavigate } from "react-router";
import CardCarousel from "../../components/CardCarousel";
import MovieCard from "../../components/MovieCard";
import { imageUrl } from "../../features/constants";
import {
  useGetMovieByRecommendationsQuery,
  useGetTvShowsByRecommendationsQuery,
} from "../../features/movieApi";
import Loading from "../Loading";

const MovieRecommendations = ({ data }) => {
 
  const { data: new_data, isLoading } = useGetMovieByRecommendationsQuery(
    data.id
  );
  const { data: tv_data, isLoading: tvLoading } =
    useGetTvShowsByRecommendationsQuery(data.id);
  if (isLoading || tvLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="mt-[25%] p-2 ">
        <h1 className="text-[#05bb0e] text-3xl  py-5 ">Recommendations</h1>

        <CardCarousel data={new_data} tvData={tv_data} />
      </div>
    </div>
  );
};

export default MovieRecommendations;
