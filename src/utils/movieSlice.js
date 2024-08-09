import { createSlice } from "@reduxjs/toolkit";


let movieSlice= createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrilerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        }

    }
})

export let {addNowPlayingMovies, addTrilerVideo}=movieSlice.actions
export default movieSlice.reducer;
