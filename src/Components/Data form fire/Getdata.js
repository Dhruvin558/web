import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { ref, get } from 'firebase/database';
import DeleteB from './DeleteB';
import './data.css';
import EditUser from './Update';


const Getdata = () => {
  // edit data
  const [editUser, setEditUser] = useState(null)
  const [users, setUsers] = useState([]);
  const [notify, setNotify] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userRef = ref(db, 'user');
      try {
        const snapshot = await get(userRef);
        const data = snapshot.val();
        if (data) {
          const usersArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key]
          }));
          setUsers(usersArray);
          console.log("Fetched Data", usersArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // delete data

  const handleDelete = (deleteUserId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== deleteUserId));
    setNotify('Data Deleted');
  };

  //edit-update data

  const handleEdit = (user) => {
    setEditUser(user)
  }
  // handleCloseEdit
  const handleCloseEdit = () => {
    setEditUser(null);
  }
  // handleUpdateUser
  const handleUpdateUser = (userid, updateFirstName, updateLastName) => {
    setUsers((PrevUser) =>
    
      PrevUser.map((user) =>
        user.id === userid ? {
          ...user,
          firstname: updateFirstName,
          lastName: updateLastName}:user
        ) )
  }


  return (
    <>
      <div className="table">
        <span className="notify">{notify}</span>
        <h1>Get Data</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>
                  <DeleteB userid={user.id} onDelete={handleDelete} setNotify={setNotify} />
                </td>
                <td><button onClick={() => handleEdit(user)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editUser && (
        <EditUser user={editUser}
          onclose={handleCloseEdit}
          onUpdate={handleUpdateUser}
        />
      )}
    </>
  );
};

export default Getdata;
