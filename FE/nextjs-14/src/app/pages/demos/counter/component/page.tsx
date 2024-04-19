import { Button } from "@mui/material"
import React from "react"


interface Props{
    count : number,
    handleClickPlus : undefined,
    handleClickMinus : undefined
}

const CounterComponent = React.memo(({count, handleClickPlus, handleClickMinus}:Props) => {
    return(
        <>
        <h2>Count : {count}</h2>
        <Button onClick={handleClickPlus}>+</Button>
        <Button onClick={handleClickMinus}>-</Button>
        </>
    )
})

export default CounterComponent