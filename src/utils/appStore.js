import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usserSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice"

let appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:configReducer

        }
    }
)
export default appStore;