import React from 'react'
import { db } from './firebase';
import { ref, remove } from 'firebase/database';

// In DeleteB component
const DeleteB = ({ userid, onDelete, setNotify }) => {
  const handleDelete = async () => {

    try {
      const userRef = ref(db, `user/${userid}`)
      console.log("1", userRef);
      remove(userRef)
      console.log("2");
      onDelete(userid)

      setNotify('Data Deleted');
      setTimeout(() => {
        setNotify('')
      }, 2000);
    } catch (e) {
      console.log("error");

    }
  }

  return (
    <button onClick={handleDelete}>Delete Data</button>
  );
}


export default DeleteB