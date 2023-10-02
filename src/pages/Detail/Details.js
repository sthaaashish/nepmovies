import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Carousel,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import {
  useGetMovieByDetailQuery,
  useGetMovieByRecommendationsQuery,
  useGetMovieByVideoQuery,
} from "../../features/movieApi";
import Loading from "../Loading";
import { imageUrl } from "../../features/constants";
import { useParams } from "react-router";
import MovieRecommendations from "./MovieRecommendation";

const Details = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const { id } = useParams();

  const { data } = useGetMovieByDetailQuery(id);
  const {
    data: videoData,
    error,
    isLoading,
  } = useGetMovieByVideoQuery(data?.id);
  

  if ( isLoading) {
    return <Loading />;
  }


  return (
    <>
      {data && (
        <>
          <div
            style={{
              backgroundImage: `url(${imageUrl}${data.backdrop_path})`,
              backgroundSize: "cover",
            }}
            className="h-screen"
          >
            <div className="mt-[25%] absolute  mx-auto   w-[1000px]">
              <Card className="grid grid-cols-2 left-[200px]">
                <CardHeader className="h-[500px] w-[400px] m-5">
                  <img
                    src={`${imageUrl}${data.poster_path}`}
                    className="object-cover "
                    alt={data.title}
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h6"
                    color="gray"
                    className="mb-4 uppercase"
                  >
                    {data.title}
                  </Typography>
                  <Typography color="gray" className="mb-8 font-normal">
                    {data.overview}
                  </Typography>
                  <Typography>{data.release_date}</Typography>
                  <Button onClick={handleOpen}>Watch Trailer</Button>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* ------------------video-------------------- */}
          <Dialog open={open} handler={handleOpen}>
            <DialogBody>
              {videoData && (
                <div>
                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </DialogBody>
          </Dialog>

      <MovieRecommendations data={data}/>
        </>
      )}
    </>
  );
};

export default Details;
