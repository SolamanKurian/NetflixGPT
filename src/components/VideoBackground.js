import useGetTrailer from "../hooks/useGetTriler";
import { useSelector } from "react-redux";

const VideoBackground = (movieId) => {
  useGetTrailer(movieId);
  let trailerVid = useSelector((store) => {
    return store.movies.trailerVideo;
  });
  return (
    <div className="">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVid?.key + "?&autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
