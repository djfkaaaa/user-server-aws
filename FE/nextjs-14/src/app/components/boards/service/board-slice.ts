import { createSlice } from "@reduxjs/toolkit"
import { fetchOneBoard, getBoards } from "./board-service"
import { IBoards } from "../model/board-model"


const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}

interface BoardState{
    json ?: IBoards,
    array ?: Array<IBoards>
}


export const initialState:BoardState = {
    json : {} as IBoards,
    array : []
}

const handleFulfilled = (state:any,{payload}:any) => {
    console.log('--------conclusion--------')
    state.array = payload
    console.log(state.array)
}



export const boardSlice = createSlice({
    name : "board",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getBoards.fulfilled,(state: any, {payload}: any) => {state.array=payload})
        .addCase(fetchOneBoard.fulfilled, handleFulfilled)
    }
})

export const getAllBoards = (state : any) => {
    console.log('------------Before useSelector--------------')
    console.log(JSON.stringify(state.board.array))
    return state.board.array;
}

export const getBoardById = (state:any) => {
    return state.board.array;
}

export const {} = boardSlice.actions

export default boardSlice.reducer;