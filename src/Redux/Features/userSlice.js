import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    userDetails: {},
    accessToken: null 
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userDetails: (state, action) => {
            state.userDetails = action.payload; 
        },
        resetUser: () => initialState,
        accessToken: (state, action) => {
            state.accessToken = action.payload; 
        },
    },
});

export const { userDetails, resetUser, accessToken } = userSlice.actions;
export default userSlice.reducer;
