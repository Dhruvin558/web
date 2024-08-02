import { ref,  update } from "firebase/database"
import { db } from "./firebase"
import { useState } from "react"





const EditUser =({user,onClose,onUpdate})=>{
    const [editFirstName,setEditFirstName] = useState(user.FirstName)
    const [editLastName,setEditlastName] = useState(user.LastName)
    const handleUpdate = async()=>{
        const userRef = ref(db,`users/${user.id}`)
        try{
            await update(userRef,{
                firstname : editFirstName,
                lastname: editLastName
            } )
            onUpdate(user.id, editFirstName, editLastName) 
            onClose()
        }catch(er){
            console.log(er);
        }
 }
    return(
       <>
       <div className="model">
        <h2> Edit user</h2>
        <div>
            <input type="text" value={ editFirstName} 
            onChange={(e)=>setEditFirstName(e.target.value)}/>
            <input type="text" value={ editLastName} 
            onChange={(e)=>setEditlastName(e.target.value)}/>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={onClose}>Cancel</button>

        </div>

       </div>
       </>
    )
}

export default EditUser