import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import { useGetTvShowsByTrendingQuery } from "../../features/movieApi";
import MovieCard from "../../components/MovieCard";
import Loading from "../Loading";
import CardCarousel from "../../components/CardCarousel";

const TrendingTvShow = () => {
  const { data, isLoading } = useGetTvShowsByTrendingQuery("week");
  const nav=useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  const releaseTvYear = data.results?.first_air_date?.split("-")[0];

console.log(data)
  return (
    <>
      <h1 className="text-3xl px-4 mt-3 text-[#05bb0e]">Trending TvShows</h1>
      <CardCarousel data={data} releaseTvYear={releaseTvYear}/>
    </>
  );
};

export default TrendingTvShow;












