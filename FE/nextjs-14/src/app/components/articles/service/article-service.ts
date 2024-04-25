import {createAsyncThunk} from '@reduxjs/toolkit';
import { IArticles } from '../model/article-model';
import { findAllArticlesAPI, findOneArticleAPI, findarticlebyAPI, postArticleAPI } from './article-api';



export const getArticles : any = createAsyncThunk(
    'articles/findAllArticles',
    async(page : number) => {
        console.log('findArticles page : ' + page)
        const data:any = await findAllArticlesAPI(1);
        const {message,result} : any = data
        return data
    }
)

export const fetchOneArticle : any = createAsyncThunk(
    'articles/fetchOneArticle',
    async(id:number) => {
        const data:any = await findOneArticleAPI(id);
        return data
    }

)

export const findarticlebyboard : any = createAsyncThunk(
    'articles/findarticlebyboard',
    async(id:number) => {
        const data:any = await findarticlebyAPI(id);
        return data
    }
)

export const postArticle : any = createAsyncThunk(
    'articles/postArticle',
    async(article:IArticles) => {
        const data:any = await postArticleAPI(article);
        return data
    }
)

