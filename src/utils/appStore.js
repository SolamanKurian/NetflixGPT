import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usserSlice"

let appStore=configureStore(
    {
        reducer:{
            user:userReducer

        }
    }
)
export default appStore;