// 'use client';

// import axios from "axios";
// import { url } from "inspector";
// import Link from "next/link";
// import { config, env } from "process";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { API } from "@/redux/common/enums/API";
// import AxiosConfig from "@/redux/common/configs/axios-config";
// import { PG } from "@/redux/common/enums/PG";



// export default function Login() {

//     const [username, setName] = useState('')

//     const handleUserName = (e: any) => {
//         setName(e.target.value)
//     }

//     const [password, setPassword] = useState('')

//     const hanlePW = (e: any) => {
//         setPassword(e.target.value)
//     }

//     const router = useRouter();

//     const handleClick = () => {

//         const url = `${process.env.NEXT_PUBLIC_API_URL}/users/login`
//         const data = { username, password } // {'name':username, 'password':password}의 축약
//         const config = AxiosConfig()
//         axios.post(url, data, config)
//             // .then(res=>{alert("로그인 결과 = " + JSON.stringify(res.data))}) < 이건 단순이 값을 출력이고 내부를 보고싶으면 아래와같이 변경 (json.stringfy 가 tostring 같은 느낌)
//             .then(res => {
//                 const message = res.data.message
//                 alert((message))
//                 if (message === 'SUCCESS') {
//                     router.push(`/pages/users/findUsers`) // 가고자하는 경로의 상위 경로 폴더 까지 다 박아줘야함
//                 } else if (message === 'FAIL') {
//                     alert("FAIL");
//                 } else if (message === 'WRONG_PASSWORD') {
//                     alert("WRONG_PASSWORD");
//                 } else {
//                     alert("지정되지 않은값");
//                 }
//             })

//     }

//     return (
//         <>
//             <div>로그인창</div>
//             <h2>ID</h2>
//             <input type="text" onChange={handleUserName} />
//             <h2>PW</h2>
//             <input type="text" onChange={hanlePW} /> <br />
//             <button onClick={handleClick}>Login</button> <br />
//         </>
//     );
// }