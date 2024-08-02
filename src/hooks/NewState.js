import React, { useEffect, useState, useRef, useMemo } from "react";
import Newline from "./Newline";
import NavbarHooks from "./NavbarHooks"
import { counterContext } from "./Context/Context";


const num = new Array(50_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMynumis: i === 40_000_000
    }
})


const NewState = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(0)
    const [number, setNumber] = useState(num)

    // const magical = number.find(item=>item.isMynumis===true)

    // memo
    const magical = useMemo(() => number.find(item => item.isMynumis === true), [number])

    const btnRef = useRef()

    // useEffect(() => {
    //     alert("number is changed")
    //     setName(name +1)
    // }, [count])

    // useEffect(() => {
    //     console.log("First render is done");
    //     btnRef.current.style.backgroundColor = "yellow"
    // }, [])



    return (
        <>
            <counterContext.Provider value={{ count, setCount }}>
                <div>
                    <span>number is {magical.index}</span>
                    {/* <NavbarHooks count={count}/> */}
                    <NavbarHooks />
                    <Newline />
                    <h3>count number {count}</h3>
                    <h2>total name {name}</h2>

                    {/* <button ref={btnRef} onClick={() => setCount(count + 1)}>+Number</button> */}

                    {/* this is for usememo only */}
                    <button onClick={() => {
                        setCount(count + 1);
                        if (count === 10) {
                            setNumber(new Array(80_000_000).fill(0).map((_, i) => {
                                return {
                                    index: i,
                                    isMynumis: i === 70_000_000
                                }
                            }))
                        }

                    }}>+Number</button>
                </div>
            </counterContext.Provider>
        </>
    )
}


export default NewState