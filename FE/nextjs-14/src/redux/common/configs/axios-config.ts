import axios, { AxiosInstance } from "axios"
import { parseCookies } from "nookies"


export default function instance() {
    const instance = axios.create({baseURL : process.env.NEXT_PUBLIC_API_URL})
    setInterceptor(instance)
    return instance
}

export const setInterceptor = (inputInstance:AxiosInstance) => {
    inputInstance.interceptors.request.use(
        (request) => {
            const accessToken = parseCookies().accessToken;
            console.log('엑시오스 인터셉터 쿠키에서 토큰 추출함')
            request.headers['Content-Type'] = "application/json"
            // request.headers['Authorization'] = `Bearer ${accessToken}`
            request.headers['Authorization'] = `Bearer ${parseCookies().accessToken}` //강사님 수정해둔 라인
            return request
     },
         (error) => {
            console.log('엑시오스 인터셉터에서 발생한 에러 = ' + error )
            return Promise.reject(error)
    }
)

    inputInstance.interceptors.response.use(
        (resp) => {
            if(resp.status === 404){
            console.log('엑시오스 인터셉터에서 발생한 에러로 404 페이지 넘어감')
            }
            return resp
    }
)
    return inputInstance
}

