import axios from "axios"



export default function AxiosConfig(){
    console.log("콘솔은 먹는지")
    return {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }
}

// export const instance = axios.create({baseURL:'http://localhost:8080/api'})

export const instance = axios.create({baseURL : process.env.NEXT_PUBLIC_API_URL})