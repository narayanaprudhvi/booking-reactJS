import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { FcSearch } from "react-icons/fc";
const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
        {" "}
      </div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1> First Class Travel </h1>
        <h2 className="py-4"> Top Locations Worldwide </h2>
        <form
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
        rounded-md text-black bg-gray-50 mt-5"
        >
          <div>
            <input
              className=" bg-transparent w-[300px] sm:w-[630px] focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <FcSearch className="icon mt-2" size={30} />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
