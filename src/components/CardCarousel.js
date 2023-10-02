import React from "react";
import Slider from "react-slick";
import MovieCard from "../components/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

const CardCarousel = ({ data, releaseTvYear, tvData }) => {
  const nav = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const newData= [...(data?.results || []), ...(tvData?.results || [])];


  return (
    <>
      <div className="mt-4 relative overflow-hidden">
        <Slider {...sliderSettings}>
          {newData &&
            newData?.map((movie) => {
              return (
                <div key={movie.id}>
                  <MovieCard
                    movie={movie}
                    handleClick={() => nav(`/Details/${movie.id}`)}
                    releaseYear={movie.release_date?.split("-")[0]}
                    releaseTvYear={releaseTvYear}
                  />
                </div>
              );
            })}
        </Slider>
        <div
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
          style={{ zIndex: 10 }}
        >
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
            onClick={() => {
              document.querySelector(".slick-prev")?.click();
            }}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
          style={{ zIndex: 10 }}
        >
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
            onClick={() => {
              document.querySelector(".slick-next")?.click();
            }}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
