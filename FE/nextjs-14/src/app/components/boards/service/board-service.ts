import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOneBoardAPI, findAllBoardsAPI } from "./board-api";

export const getBoards : any = createAsyncThunk(
    'boards/findAllBoards',
    async(page : number) => {
        console.log('findBoards page : ' + page)
        const data:any = await findAllBoardsAPI(1);
        return data
    }
)

export const fetchOneBoard : any = createAsyncThunk(
    'boards/fetchOneBoard',
    async(id: number) => {
        const data:any = await fetchOneBoardAPI(id);
        return data
    }
)