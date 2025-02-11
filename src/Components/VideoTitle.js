import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] z-10 px-24 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black  rounded-lg p-4 px-12 text-lg hover:bg-opacity-50">
          Play
        </button>
        <button className="bg-gray-500 text-white bg-opacity-50 rounded-lg p-4 px-12 mx-2 text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
