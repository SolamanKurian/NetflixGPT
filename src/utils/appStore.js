import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usserSlice";
import moviesReducer from "./movieSlice";

let appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer

        }
    }
)
export default appStore;