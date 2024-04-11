import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="pt-32 ">
      <form className=" text-center">
        <input
          className="p-2  m-2 border border-black rounded-md w-[410px] h-[50px] text-black"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="p-2 px-4 py-3 m-2 bg-red-700 text-white rounded-md">
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar