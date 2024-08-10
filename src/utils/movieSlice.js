import { createSlice } from "@reduxjs/toolkit";


let movieSlice= createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrilerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        }

    }
})

export let {addNowPlayingMovies, addTrilerVideo, addPopularMovies}=movieSlice.actions
export default movieSlice.reducer;
