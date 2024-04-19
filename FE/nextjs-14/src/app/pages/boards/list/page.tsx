'use client';





import CardButton from "@/app/atoms/button/CardButton";
import { IBoards } from "@/app/components/boards/model/board-model";
import { getBoards } from "@/app/components/boards/service/board-service";
import { getAllBoards } from "@/app/components/boards/service/board-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function boardCards(){

    const dispatch = useDispatch()
    const allBoards = useSelector(getAllBoards)
    useEffect(() => {
        dispatch(getBoards(1))
    },[dispatch])

    return(<>
    <h2>게시판 목록</h2>
    {allBoards.map((board: IBoards)=>(<CardButton id={board.id||0} title={board.title||""} description={board.description||""}/>))}
    </>)
}


