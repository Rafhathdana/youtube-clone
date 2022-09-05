import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    currentUser:null,
    loading:false,
    error:false.valueOf,
};

export const videoSlice= createSlice({
    name: "video",
    initialState,
    reducers: {

    }
})
export const { }= videoSlice.actions;
export default videoSlice.reducer;

