import axios from "axios"
import { parseCookies } from "nookies"



// export default function AxiosConfig(){
//     console.log("콘솔은 먹는지")
//     return {
//         headers: {
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/json",
//             Authorization: `Bearer blah ~`,
//             "Access-Control-Allow-Origin": "*",
//         }
//     }
// }

// export const instance = axios.create({baseURL:'http://localhost:8080/api'})

const instance = axios.create({baseURL : process.env.NEXT_PUBLIC_API_URL})

instance.interceptors.request.use(
    (request) => {
        const accessToken = parseCookies().accessToken;
        console.log('엑시오스 인터셉터 쿠키에서 토큰 추출함')
        request.headers['Content-Type'] = "application/json"
        request.headers['Authorization'] = `Bearer ${accessToken}`
        return request
    },
    (error) => {
        console.log('엑시오스 인터셉터에서 발생한 에러 = ' + error )
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (resp) => {
        if(resp.status === 404){
            console.log('엑시오스 인터셉터에서 발생한 에러로 404 페이지 넘어감')
        }
        return resp
    }
)


export default instance