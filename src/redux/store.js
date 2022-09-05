import { configureStore, current } from "@reduxjs/toolkit";
import userReducer from './userSlice'

export const store = comnfigureStore ({
    reducer:{
        user:userReducer,
    },
})
