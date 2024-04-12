import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-6xl font-bold">{title}</h1>
      <p className=" hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
      <div className="py-2">
        <button className="bg-white text-black text-md md:text-xl font-semibold rounded-lg py-2 md:py-4 px-4 md:px-12  mx-2 hover:bg-opacity-85">
          ▶ Play
        </button>
        <button className="bg-gray-500 hidden md:inline-block text-xl font-semibold rounded-lg py-2 md:py-4 px-6 md:px-10  mx-2  bg-opacity-50">
          ℹ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
