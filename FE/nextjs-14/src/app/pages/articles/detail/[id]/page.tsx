'use client';

import { IArticles } from "@/app/components/articles/model/article-model";
import { fetchOneArticle } from "@/app/components/articles/service/article-service";
import { getArticleById } from "@/app/components/articles/service/article-slice";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function ArticlePage(props:any){

    const getArticle:IArticles = useSelector(getArticleById)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchOneArticle(props.params.id))
    },[])
    return(
        <>
        <h2>상세 게시글 페이지</h2>
        <span>Num : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getArticle.id}</Typography>
        <span>제목 : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getArticle.title}</Typography>
        <span>내용 : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getArticle.content}</Typography>
        </>
    )
}
