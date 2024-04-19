'use client'

import { IUser } from "@/app/components/users/model/user-model"
import { deleteUser, fetchOneUser, modifyUser} from "@/app/components/users/service/user-service"
import { getUserById, reHandleClickJob, reHandleClickPn, reHandleClickPw,  } from "@/app/components/users/service/user-slice"
import { PG } from "@/redux/common/enums/PG"
import { Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UsersPage({params}:any){

    const router = useRouter()
    const dispatch = useDispatch()
    const getUsers:IUser = useSelector(getUserById)
    
    useEffect(()=>{
        dispatch(fetchOneUser(params.id))
    },[])

    const handleDelete = () => {
        dispatch(deleteUser(params.id))
        alert("삭제 완료")
        router.replace(`${PG.USER}/findUsers`)
    }

    const handleClickPw = (e: any) => (dispatch(reHandleClickPw(e.target.value)))
    const handleClickPn = (e: any) => (dispatch(reHandleClickPn(e.target.value)))
    const handleClickJob = (e: any) => (dispatch(reHandleClickJob(e.target.value)))
    
    const postJava = () => {
        dispatch(modifyUser(getUsers))
        alert("수정이 완료되었습니다.")
        console.log(getUsers)
        location.reload();
    }
    
    return(
        <>
          <h2>사용자 목록</h2>
          <span>Num : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.id}</Typography>
          <span>ID : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.username}</Typography> <br />
          <span>비밀번호 :</span><input type="text" onChange={handleClickPw} placeholder={getUsers.password}/><br />
          <span>NAME : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.name}</Typography><br />
          <span>전화번호 : </span><input type="text" onChange={handleClickPn} placeholder={getUsers.phoneNumber}/><br />
          <span>직업 : </span><input type="text" onChange={handleClickJob} placeholder={getUsers.job}/><br />
          <button onClick={postJava}>수정</button> <br />
          <button onClick={handleDelete}>삭제</button>
        </>
       
        
       
    );
    //user-column.tsx 파일에서 내가 id 파라미터 효과주고싶은곳
    //이번의 경우 username에 link 참조
}








