import React, { useEffect, useState, useRef } from "react";
import Newline from "./Newline";
import NavbarHooks from "./NavbarHooks"
import { counterContext } from "./Context/Context";

const NewState = () => {
    const [count, SetCount] = useState(0)
    const [name, SetName] = useState(0)
    const btnRef = useRef()

    // useEffect(() => {
    //     alert("number is changed")
    //     SetName(name +1)
    // }, [count])

    useEffect(() => {
        console.log("First render is done");
        btnRef.current.style.backgroundColor = "yellow"
    }, [])



    return (
        <>
        <counterContext.Provider value={{count , SetCount}}>
        <div>
            <NavbarHooks />
            <Newline  />
            <h3>count number {count}</h3>
            <h2>total name {name}</h2>
            <button ref={btnRef} onClick={() => SetCount(count + 1)}>+Number</button>

        </div>
        </counterContext.Provider>
        </>
    )
}


export default NewState