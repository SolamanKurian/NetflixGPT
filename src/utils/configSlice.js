// contain the configurations of app for a specific user

import { createSlice } from "@reduxjs/toolkit";

let configSlice=createSlice({
    name: "config",
    initialState:{
        lang:"English"
    },
    reducers:{
        changeLanguage:(state, action)=>{
            state.lang=action.payload;
        }
    }
})

export let {changeLanguage}=configSlice.actions
export default configSlice.reducer