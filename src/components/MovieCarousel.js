import { Carousel, Typography, Button, Rating } from "@material-tailwind/react";
import { imageUrl } from "../features/constants";
import { useGetMovieByCategoryQuery } from "../features/movieApi";
import Loading from "../pages/Loading";

export function MovieCarousel() {
  const { data, error, isLoading, isError } =
    useGetMovieByCategoryQuery("now_playing");


  if (isLoading) {
    return <Loading />;
  }
  const moviesDisplay = data.results.slice(0, 4);
  return (
    <>
      <Carousel className="rounded-xl ">
        {moviesDisplay.map((item) => (
          <div key={item.id} className="relative h-full w-full msm:h-[400px] ">
            <img
              src={`${imageUrl}${item.backdrop_path}`}
              alt={`image ${item.id}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute  inset-0 grid  justify-start h-full w-full items-center px-10 bg-black/30 ">
              <div className="w-3/4 text-left msm:text-sm mmd:w-2/4  ">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 msm:text-sm text-3xl text-left md:text-4xl lg:text-5xl"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-6 msm:text-[12px] text-left "
                >
                  {item.overview}
                </Typography>
                <div className="text-left mb-6 msm:text-sm">
                  <Rating value={4} readonly />
                </div>

                <div className="flex justify-start text-black ">
                  <Button
                    size="lg "
                    color="white"
                    className=" bg-[#00dafc]  hover:bg-black text-white"
                  >
                    Watch Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
