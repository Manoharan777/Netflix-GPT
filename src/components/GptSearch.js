import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion'
import { NETFLIX_bG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={NETFLIX_bG_IMG} alt="logo" />
      </div>
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
}

export default GptSearch