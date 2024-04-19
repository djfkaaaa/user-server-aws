'use client';
import MoveButton from "@/app/atoms/button/MoveButton";
import { IArticles } from "@/app/components/articles/model/article-model";
import { findarticlebyboard, postArticle } from "@/app/components/articles/service/article-service";


import { MyTypography } from "@/app/components/common/style/cell";
import { PG } from "@/redux/common/enums/PG";
import { AttachFile, FmdGood, ThumbUpAlt } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function save(props:any){

    const dispatch = useDispatch()
    const router = useRouter()
    const [article, setArticle] = useState({} as IArticles)

    const handelCancel = () => {
      alert('글 작성을 취소합니다.')
      router.push(`${PG.BOARD}/list`)}
      
    const pickBoardNum = (e:any) => {
      setArticle({
        ...article,
        boardId: e.target.value
      })
    }  
    const handleTitle = (e:any) => {
      setArticle({
        ...article,
        title: e.target.value
      })
    }
    const handleContent = (e:any) => {
      setArticle({
        ...article,
        content: e.target.value
      })
    }
    const handlePost = () => {
      console.log(article)
      dispatch(postArticle(article))
      alert('작성 완료')
      router.push(`${PG.ARTICLE}/getBoardId/${article.boardId}`)
    }


    return(<>
<form className="max-w-sm mx-auto">
  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select onChange={pickBoardNum} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
     dark:focus:border-blue-500">
    <option selected>Choose a Board</option>
    <option value="1">REVIEW</option>
    <option value="2">QnA</option>
    
  </select>
</form>

    <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
      {MyTypography('Article 작성', "1.5rem")}
      <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" 
      placeholder="Title" type="text" name="title" onChange={handleTitle} />
      <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" 
      placeholder="Describe everything about this post here" name="content" onChange={handleContent}></textarea>
      {/* <!-- icons --> */}
      <div className="icons flex text-gray-500 m-2">
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <ThumbUpAlt component={ThumbUpAlt}></ThumbUpAlt>
        </svg>
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <FmdGood component={FmdGood}></FmdGood>
        </svg>
        <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <AttachFile component={AttachFile}></AttachFile>
        </svg>
        <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
      </div>
      {/* <!-- buttons --> */}
      <div className="buttons flex">
        <div className="btn  overflow-hidden relative w-30 bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
          onClick={handelCancel}>Cancel </div>
        <div className="btn  overflow-hidden relative w-30 bg-blue-500 text-white p-3 px-8 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full
        before:bg-pink-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-200 hover:before:animate-ping transition-all duration-00"
          onClick={handlePost}> Post </div>
      </div>
    </div>
    </>)
}

