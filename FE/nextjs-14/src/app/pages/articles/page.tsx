'use client';

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from 'react-redux'

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getAllArticles } from "@/app/components/articles/service/article-slice";
import { getArticles } from "@/app/components/articles/service/article-service";
import Columns from "@/app/components/articles/module/article-columns";

const articlesPage:NextPage = ({data}:any) => {

    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)

    if(allArticles !== undefined){
        console.log('allArticles is not defined')
        console.log('lenght is = ' + allArticles.length)
        for(let i = 0; i<allArticles.length; i++){
            console.log(JSON.stringify(allArticles[i]))
        }
    }else{
        console.log('allArticles is undefined')
    }

    useEffect(() => {
        dispatch(getArticles(1))
    }, [])

    
    return (<>
        <h2>게시글 목록 Article</h2>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={allArticles}
        columns={Columns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>)
}
export default articlesPage;
