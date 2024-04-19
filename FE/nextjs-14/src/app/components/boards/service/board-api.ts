import { instance } from "@/redux/common/configs/axios-config"

export const findAllBoardsAPI = async (page : number) => {
    try{
        const response = await instance.get('/boards/list',{
            params: {page, limit: 10}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}

export const fetchOneBoardAPI = async (id : number) => {
    try{
        const response = await instance.get('/boards/detail',{
            params: {id}
        })
        return response.data
    }catch(error){
        return error
    }
}