import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isLoading: false,
        error: false,
        isLoggedIn: false
    },
    reducers: {
        registerStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        registerSuccess(state, action) {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.currentUser = action.payload;
            state.error = null;
        },
        registerFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        loginStart: (state) => {
            debugger//3
            state.isLoading = true
        },
        loginSuccess: (state, action) => {
            debugger //4
            state.isLoading = false;
            state.error = false;
            state.isLoggedIn = true;
            state.currentUser = action.payload;
            console.log('actions', action);

        },
        loginFailure: (state) => {
            state.isLoading = false;
            state.error = true;
            state.isLoggedIn = false;
            state.currentUser = null
        },
        logout: (state) => {
            state.isLoading = false;
            state.error = false;
            state.isLoggedIn = false;
            state.currentUser = null
        },
        updateUser: (state, action) => {
            console.log('123',{ ...state.currentUser, ...action.payload });
            state.isLoading = false;
            state.error = false;
            state.isLoggedIn = true;
            state.currentUser = { ...state.currentUser, ...action.payload }
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logout, updateUser, registerStart, registerSuccess, registerFailure } = userSlice.actions;
export default userSlice.reducer;