import React from "react";
import Slider from "react-slick";
import MovieCard from "../components/MovieCard";
import { imageUrl } from "../features/constants";
import { useGetByTrendingQuery } from "../features/movieApi";
import Loading from "./Loading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import CardCarousel from "../components/CardCarousel";

const Trending = () => {
  const { data, isLoading } = useGetByTrendingQuery("week");
  const nav=useNavigate();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h1 className="text-3xl px-4 mt-3 text-[#05bb0e]">Trending Movies</h1>
      <CardCarousel data={data} />
    </>
  );
};

export default Trending;












