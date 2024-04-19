import { createAsyncThunk } from "@reduxjs/toolkit";
import { exitsByUsernameAPI, fetchAllUsersAPI, fetchCountUserAPI, fetchDeleteUserAPI, fetchModiUserAPI, fetchOneUserAPI, loginUserAPI } from "./user-api";
import { IUser } from "../model/user-model";

export const fetchAllUsers: any = createAsyncThunk(
    'users/fetchAllUsers',
    async (page: number) => {
        const data:any = await fetchAllUsersAPI(1);
        return data
    })

export const fetchOneUser: any = createAsyncThunk(
    'users/fetchOneUser',
    async (id: number) => 
        (await fetchOneUserAPI(id)))

export const fetchCount: any = createAsyncThunk(
    'users/fetchCount',
    async ()=>
        (await fetchCountUserAPI()))

export const deleteUser : any = createAsyncThunk(
    'users/deleteUser',
    async (id : number) => 
        (await fetchDeleteUserAPI(id)))

////////////////////////modify//////////////////////////////
export const modifyUser : any = createAsyncThunk(
    'users/modifyUser',
    async (user : IUser)=>{
        const data : any = await fetchModiUserAPI(user);
        return data
    })
        // (await fetchModiUserAPI(user)))
        
export const loginUser: any = createAsyncThunk(
    'users/loginUser',
    async (user: IUser) => {
        const data: any = await loginUserAPI(user);
            return data
        }
)

export const exitsByUsername : any = createAsyncThunk(
    'users/exitsByUsername',
    async (username : String) => {
        const data: any = await exitsByUsernameAPI(username);
            return data
    }
)