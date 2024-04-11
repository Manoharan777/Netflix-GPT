import React from 'react'
import Lang from '../utils/languageConstants';
import {useSelector} from "react-redux"
const GptSearchBar = () => {
const langSelection  = useSelector((store)=> store.config.lang)

  return (
    <div className="pt-32 ">
      <form className=" text-center">
        <input
          className="p-2  m-2 border border-black rounded-md w-[430px] h-[50px] text-black"
          type="text"
          placeholder={Lang[langSelection].gptSearchPlaceholder}
        />
        <button className="p-2 px-4 py-3 m-2 bg-red-700 text-white rounded-md">
          {Lang[langSelection].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar