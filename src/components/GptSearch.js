import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { NETFLIX_bG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div>
        <div className="fixed -z-10">
          <img
            className="md:w-screen md:bg-repeat-y h-screen object-cover"
            src={NETFLIX_bG_IMG}
            alt="bgimg"
          />
        </div>
        <div className="pt-[30%] md:p-0">
          <GptSearchBar />
          <GptSuggestion />
        </div>
      </div>
    </>
  );
};

export default GptSearch;
