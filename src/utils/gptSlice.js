import {createSlice} from "@reduxjs/toolkit";


const gtpSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieList: null,
    gptMovieName: null,
  },
  reducers: {
    toggleShowGptView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      state.gptMovieList = action.payload;
    },
    addGptMoviesName: (state, action) => {
      state.gptMovieName = action.payload;
    },
  },
});
export const { toggleShowGptView, addGptMoviesResult, addGptMoviesName } =
  gtpSlice.actions;
export default gtpSlice.reducer;