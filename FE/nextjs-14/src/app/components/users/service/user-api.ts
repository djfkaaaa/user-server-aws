import  instance  from '@/redux/common/configs/axios-config'
import { use } from 'react'
import { IUser } from '../model/user-model'
import constructWithOptions from 'styled-components/dist/constructors/constructWithOptions'

export const fetchAllUsersAPI = async (page: number) =>{
    try{
        const response = await instance().get('/users/list',{ 

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
        return(await instance().get('/users/detail',{
            params: {id}
        })).data
}

export const fetchCountUserAPI = async () => {
        return(await instance().get('/users/count')).data
}

export const fetchDeleteUserAPI = async (id : number) => {
    return(await instance().delete('/users/delete',{
        params: {id}
    })).data
}


export const fetchModiUserAPI = async (user:IUser) => {
    try{
        return(await instance().put('/users/modify',user)).data
        }
        catch(error){
            console.log(error)
        return error
    }
}

export const loginUserAPI = async (user:IUser) => {
    console.log(`login api에 넘어온 파라미터 : ${JSON.stringify(user)}`)
    try{
        const response = await instance().post('/auth/login',user)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}

export const exitsByUsernameAPI = async (username: String) => {
    return(await instance().get('/auth/getusername',{
        params: {username}
    })).data
}

export const logoutAPI = async (username : String) => {
    return(await instance().get('/users/logout',{
        params: {username}
    })).data
}