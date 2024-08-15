import { createSlice } from "@reduxjs/toolkit";


let gptSlice= createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null
    },
    reducers:{
        toggleGPTsearchView: (state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addgptMovieResults:(state,action)=>{
            state.gptMovies=action.payload;
        }
    }
})

export let {toggleGPTsearchView, addgptMovieResults}=gptSlice.actions
export default gptSlice.reducer
