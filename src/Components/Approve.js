

import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function Approve() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
       
    
        fetchUsers();
      }, []);
const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8000/approve');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };


const handleApproval = (tutorId) => {
    axios.put(`http://localhost:8000/approve/${tutorId}`)
      .then(response => {
        console.log(response.data.message);
        fetchUsers();
      })
      .catch(error => console.error(error));
};


const handleRejection = (tutorId) => {
     axios.put(`http://localhost:8000/reject/${tutorId}`)
     .then(response => {
       console.log(response.data.message);
       fetchUsers();
     })
     .catch(error => console.error(error));
  };


  

    return (
        <div >

          <Header/>
<div className='m-5' >
          <h3 className='mb-4 text-success'>Remote Tutors</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Idcard No</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr >
                            <td>{user.id}</td>
                            <td>{user.commonAuth.username}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.idcard}</td>
                            <td>{user.commonAuth.status}</td>
                            <th><button onClick={() => handleApproval(user.commonAuth._id)}  className='btn btn-success m-2'>Approve</button><button  onClick={() => handleRejection(user.commonAuth._id)}  className='btn btn-danger'>Reject</button></th>









                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Approve;
