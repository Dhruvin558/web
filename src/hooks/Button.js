import React, { useContext } from "react";
import Component1 from "./Component1";
import { counterContext } from './Context/Context'


const Button =()=>{
    const value = useContext(counterContext)
    return(
        <div>
            <button onClick={() => value.SetCount((count) => count + 1)} ><span><Component1 /></span>Click me</button>
            {/* <button ><span><Component1 /></span>number</button> */}
            
        </div>
    )
} 

export default Button