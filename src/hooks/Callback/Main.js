import React, { useState } from 'react'
import Navbars from './Navbars'



const Main = () => {
    const [count, setCount] = useState(0)

    const [adjective, setAdjective] = useState("Dhruvin")

    const getadjective = () => {
        return "another"

    }

// getadjective={getadjective}
    return (
        <div>
            <Navbars adjective={"Dhruvin"}  />
                    <button onClick={() => setCount(count + 1)}>+Number</button>

            <h1>hyy</h1>

        </div>
    )
}

export default Main
