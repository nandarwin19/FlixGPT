import React from "react";
import { CiPlay1 } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-56 lg:pt-64 z-10 -mt-8 px-12 absolute aspect-video text-white bg-black/60 w-screen min-h-screen">
      <h1 className="font-bold text-2xl md:text-3xl text-center md:text-start">
        {title}
      </h1>
      <p className="w-full text-center md:text-start md:w-1/4 my-6">
        {overview}
      </p>
      <div className="flex gap-8 text-white items-center md:items-start justify-center md:justify-start">
        <button className="w-24 h-8 md:w-36 md:h-12 bg-white text-black rounded-md hover:bg-white/80 flex items-center justify-center gap-1">
          <CiPlay1 /> Play
        </button>
        <button className="w-24 h-8 md:w-36 md:h-12 bg-white text-black rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
