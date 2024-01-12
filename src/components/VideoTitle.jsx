import React from "react";
import { CiPlay1 } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-64 z-1  px-12 absolute aspect-video text-white bg-black/60 w-screen h-screen">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-1/4 my-6">{overview}</p>
      <div className="flex gap-8 text-white">
        <button className="w-36 h-12 bg-white text-black rounded-md hover:bg-white/80 flex items-center justify-center gap-1">
          <CiPlay1 /> Play
        </button>
        <button className="w-36 h-12 bg-white text-black rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
