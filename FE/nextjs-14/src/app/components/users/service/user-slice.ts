import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { initialState } from "./user-init";
import { exitsByUsername, fetchAllUsers, fetchCount, fetchOneUser, loginUser, modifyUser } from "./user-service";
import { IUser } from "../model/user-model";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface IAuth{
    message?: string,
    token?: string

}

interface UserState {
    json?: IUser,
    array?: Array<IUser>,
    auth?: IAuth
}

export const initialState: UserState = {
    json: {} as IUser, //자바의 Iuser user = new Iuser
    array : [],
    auth : {} as IAuth
}


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reHandleClickPw: (state:any, {payload}) => {state.json.password = payload},
        reHandleClickPn: (state:any, {payload}) => {state.json.phoneNumber = payload},
        reHandleClickJob: (state:any, {payload}) => {state.json.job = payload}
    },
    extraReducers: builder => {
        
        builder 
        .addCase(fetchAllUsers.fulfilled, (state: any, {payload}: any) => {state.array=payload}) 
        .addCase(fetchOneUser.fulfilled, (state: any, {payload}: any) => {state.json=payload})
        .addCase(fetchCount.fulfilled,(state: any, {payload}:any)=>{state.count=payload})
        .addCase(loginUser.fulfilled, (state:any, {payload}:any)=>{state.auth=payload})
        .addCase(modifyUser.fulfilled,(state:any,{payload}:any)=>{state.json=payload})
        .addCase(exitsByUsername.fulfilled, (state: any, {payload}: any) => {state.json=payload})
    }})

export const getAllUsers = (state: any) => state.user.array;
export const getUserById = (state: any) => state.user.json;
export const getUserByUsername = (state: any) => {
    console.log(JSON.stringify(state.user.json))
    return state.user.json; 
}
export const getUserCount = (state: any) => state.user.count;

export const getLoginMessage = (state:any) => {    // DB users 테이블의 바깥
    console.log(JSON.stringify(state.user.auth))
    return state.user.auth
}

export const {reHandleClickPw, reHandleClickPn, reHandleClickJob  } = userSlice.actions

export default userSlice.reducer;
