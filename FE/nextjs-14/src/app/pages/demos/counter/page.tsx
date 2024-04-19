'use client';

//react counter page
import { Button } from "@mui/material";
import { useState } from "react";

export default function Counter() {
    
    const [count,setCount] = useState(0)

    const handleClickPlus = () => {
        setCount(count+1)
    }

    const handleClickMinus = () => {
        setCount(count-1)
    }

    return(
        <>
        <h2>Count : {count}</h2>
        <Button onClick={handleClickPlus}>+</Button>
        <Button onClick={handleClickMinus}>-</Button>
        </>
    )
}