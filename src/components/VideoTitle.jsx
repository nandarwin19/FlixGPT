import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mt-64 max-container">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-1/4 my-6">{overview}</p>
      <div className="flex gap-8 text-white">
        <button className="w-36 h-12 bg-slate-400 rounded-md"> ▶️ Play</button>
        <button className="w-36 h-12 bg-slate-400 rounded-md">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
