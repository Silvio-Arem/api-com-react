import {createSlice} from "@reduxjs/toolkit";

interface UserState {
    token?: string,
    email?: string,
    isLogged: boolean,
}

const userReduce = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
    } as UserState,
    reducers: {
        
    }
});