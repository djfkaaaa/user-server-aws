'use client';


import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";
import { PG } from "@/redux/common/enums/PG";
import instance from "@/redux/common/configs/axios-config";

 
export default function join(){

    const [inputs, setInputs] = useState({
        username : "",
        password : "",
        name : "",
        phoneNumber : "",
        job : ""
    })
    const {username,password,name,phoneNumber,job} = inputs;
    const handleChange = (e:any) => {
        const {value, name} = e.target;
        setInputs(
             ({
                ...inputs,
                [name]: value
            })
        );
    }
    const router = useRouter();

    const onClick = (e : any) => {
    e.preventDefault()
        alert('리스트가 가져가는 이름 = ' + username + ' '+ password + ' ' +name + ' ' +phoneNumber + ' '+job )
    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/save` 
    const data = {username,password,name,phoneNumber,job} 
    const config = AxiosConfig()
    axios.post(url,data)
    .then(res=>
        {alert(JSON.stringify(res.data)) 
        router.push(`${PG.USER}/login`)
        })
    }

    return(
        <>
        <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label htmlFor="username"><b>username</b></label>
    <input type="text" placeholder="Enter username" name="username" onChange={handleChange} required/> <br />

    <label htmlFor="password"><b>password</b></label>
    <input type="text" placeholder="Enter password" name="password" onChange={handleChange} required/> <br />

    <label htmlFor="name"><b>name</b></label>
    <input type="text" placeholder="Enter name" name="name" onChange={handleChange} required/> <br />
    
    <label htmlFor="phoneNumber"><b>phone</b></label>
    <input type="text" placeholder="Enter phone" name="phoneNumber" onChange={handleChange} required/> <br />

    <label htmlFor="job"><b>job</b></label>
    <input type="text" placeholder="Enter job" name="job" onChange={handleChange} required/> <br />


    <label>
      <input type="checkbox" checked={true} name="remember" style={{marginBottom:"15px"}}/> 
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button onClick={onClick} type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
        </>
    );
}