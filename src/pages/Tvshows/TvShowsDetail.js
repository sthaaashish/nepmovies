import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { imageUrl } from "../../features/constants";
import {
  useGetTvShowsByDetailQuery,
  useGetTvShowsByVideoQuery,
} from "../../features/movieApi";
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
import Loading from "../Loading";
import MovieRecommendations from "../Detail/MovieRecommendation";

const TvShowsDetail = () => {
  const nav=useNavigate();
  const [open, setOpen] = useState(null);
  const openHandler = () => {
    setOpen(!open);
  };
  const { id } = useParams();
  const { data, isLoading } = useGetTvShowsByDetailQuery(id);
  const { data: video_Data, isLoading: video_Loading } =
    useGetTvShowsByVideoQuery(id);
  

  if (isLoading || video_Loading ) {
    return <Loading />;
  }
 
  console.log(video_Data);
  return (
    <>
      {data && (
        <div>
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
                    alt={data.name}
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h6"
                    color="gray"
                    className="mb-4 uppercase"
                  >
                    {data.name}
                  </Typography>
                  <Typography color="gray" className="mb-8 font-normal">
                    {data.overview}
                  </Typography>
                  <Typography>{data.first_air_date}</Typography>
                  <Button onClick={openHandler}>Watch Trailer</Button>
                </CardBody>
              </Card>
            </div>
          </div>

          <Dialog open={open} handler={openHandler}>
            <DialogBody>
              {video_Data && (
                <div>
                  <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${video_Data?.results[0]?.key}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </DialogBody>
          </Dialog>
<div>
  <MovieRecommendations data={data}/>
</div>
        </div>
      )}
    </>
  );
};

export default TvShowsDetail;
