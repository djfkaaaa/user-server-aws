'use client'

import UserColumns from "@/app/components/users/module/user-column"
import { fetchAllUsers, fetchCount } from "@/app/components/users/service/user-service"
import { getAllUsers, getUserCount } from "@/app/components/users/service/user-slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


const UsersPage: NextPage = () => {
    
    const dispatch = useDispatch()
 
    const allUsers: [] = useSelector(getAllUsers)
    //getname < getAllUsers가 getter니깐
    const count = useSelector(getUserCount)

    useEffect(()=>{
        dispatch(fetchAllUsers(1))
        dispatch(fetchCount())
    },[])
    // setName << set이 필드에 값을 저장하는 역할, 리덕스의 store는 한개고 그안에 slice를 통해 쪼개서 값을 저장
    // fetchAllUsers는 파라미터고 함수로 전달됨
    // ^ 얘는 썽크고 썽크는 비동기 통신
    return(<>
    <h2>사용자 수 = {count}</h2>

    <div style={{ height: "100%", width: "100%" }}>
    {allUsers && <DataGrid
        rows={allUsers}
        columns={UserColumns()}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
    />}
   </div>
   </>
    )
}

export default UsersPage;


    // 이 코드 상에서 무상태의 개념을 적용시키면, 값이 바뀔때 컴포넌트 함수가 새로 실행되며 
    // 새로운 리턴 값이 만들어진다한다, 이 말은 기존의 리턴값이 있다는 것이고 이 코드상 return은 기존에 있던
    // 리턴값, useEffect가 실행되어 값이 바뀌면? 새로운 return 값이 생김?
    // return 안에 있는 usercolumns 함수가 먼저 실행
    // 버블링 개념으로 즉시실행함수인 useEffect보다 return내의 usercolumns함수가 먼저 실행
    // 얘는 구조를 통해 묵시적으로 실행이 움직이는 ducks pattern
    // ducks pattern의 핵심은 자바처럼 명시적으로 이름을 부여하지않는다.