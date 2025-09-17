import{createSlice} from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialStatae: null,
    reducers:{
        addfeed:(state,action) => action.payload,
        removeFeed:(state,action) => null,
    },
});
 export default feedSlice;