import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="p-2">
        <button className="bg-white text-black text-xl font-semibold rounded-lg p-4 px-12  mx-2 hover:bg-opacity-85">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white text-xl rounded-lg p-4 px-12 mx-2 bg-opacity-50">
          ℹ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
