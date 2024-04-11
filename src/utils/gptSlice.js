import {createSlice} from "@reduxjs/toolkit";


const gtpSlice = createSlice(
    {
        name: "gpt",
        initialState: {
            showGptSearch : false,
        },
        reducers: {
            toggleShowGptView : (state) => {
                state.showGptSearch = !state.showGptSearch;
            }
        }
    }
)
export const {toggleShowGptView} = gtpSlice.actions;
export default gtpSlice.reducer;