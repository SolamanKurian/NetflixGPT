import React from "react";

const VideoTitle = ({ title, overview }) => {

  return (
    <div className="pt-[20%] pl-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-14 p-4 rounded-lg font-bold hover:bg-opacity-70">Play</button>
        <button className="bg-gray-500 text-white px-10 p-4 rounded-lg bg-opacity-50 mx-2">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
