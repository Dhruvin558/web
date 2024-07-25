import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { ref, get } from 'firebase/database'
import { css } from './data.css'

const Getdata = () => {
    const [user, setUse] = useState([])


    useEffect(() => {

        const featchData = async () => {
            const userRef = ref(db, 'user')
            try {
                const snapshort = await get(userRef)
                const data = snapshort.val();
                const useArray = Object.keys(data).map((key) => (
                    {
                        id: key,
                        ...data[key]
                    }
                ))

                setUse(useArray)
                console.log("Featched Data ", useArray);
            } catch (error) {
                console.log(error)
            }
        }
        featchData();
    }, [])

    return (<>
        <div className='table'>
            <h1>get data</h1>
            <tr >
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
            {
                user.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>Delete</td>
                        <td>Edit</td>
                    </tr>
                )
            )}
        </div>
    </>
    )

}

export default Getdata
