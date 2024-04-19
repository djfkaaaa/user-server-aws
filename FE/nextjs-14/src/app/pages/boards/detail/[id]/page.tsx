'use client';

import { fetchOneBoard } from "@/app/components/boards/service/board-service";
import { getBoardById } from "@/app/components/boards/service/board-slice";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function BoardPage(props:any){
    
    const dispatch = useDispatch()
    const getBoard = useSelector(getBoardById)
    
    useEffect(()=>{
        dispatch(fetchOneBoard(props.params.id))
    },[])
    
    
    return(
        <>
        <h2>보드 상세 페이지</h2>
        <span>Num : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getBoard.id}</Typography>
        <span>게시판 이름 : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getBoard.title}</Typography>
        <span>게시판 타입 : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getBoard.description}</Typography>
        </>
    )
}