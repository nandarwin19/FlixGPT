import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-64 px-12 absolute aspect-video text-white bg-gradient-to-r from-black w-screen h-screen">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-1/4 my-6">{overview}</p>
      <div className="flex gap-8 text-white">
        <button className="w-36 h-12 bg-white text-black rounded-md hover:bg-white/80">
          {" "}
          ▶️ Play
        </button>
        <button className="w-36 h-12 bg-white text-black rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
