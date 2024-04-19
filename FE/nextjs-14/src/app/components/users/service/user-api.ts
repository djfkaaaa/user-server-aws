import { instance } from '@/redux/common/configs/axios-config'
import { use } from 'react'
import { IUser } from '../model/user-model'

export const fetchAllUsersAPI = async (page: number) =>{
    try{
        const response = await instance.get('/users/list',{ 

            params: {page, limit: 10}
        })
        console.log("-----")
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}

export const fetchOneUserAPI = async (id: number) => {
        return(await instance.get('/users/detail',{
            params: {id}
        })).data
}

export const fetchCountUserAPI = async () => {
        return(await instance.get('/users/count')).data
}

export const fetchDeleteUserAPI = async (id : number) => {
    return(await instance.delete('/users/delete',{
        params: {id}
    })).data
}


export const fetchModiUserAPI = async (user:IUser) => {
    try{
        return(await instance.put('/users/modify',user)).data
        }
        catch(error){
            console.log(error)
        return error
    }
}

export const loginUserAPI = async (user:IUser) => {
    try{
        const response = await instance.post('/users/login',user)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}

export const exitsByUsernameAPI = async (username: String) => {
    return(await instance.get('/users/getusername',{
        params: {username}
    })).data
}