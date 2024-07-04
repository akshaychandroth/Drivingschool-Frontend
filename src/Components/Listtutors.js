import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';


function Listtutors() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchUsers();
    }, []);
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/listtutors");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error.message)
      }
    };
  

    
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/delete-tutor/${id}`);
      alert(response.data.message);
      fetchUsers(setUsers)
    } catch (error) {
      console.error('Error deleting tutor:', error);
      alert('Failed to delete tutor. Please try again later.');
    }
  };





  return (
    <div>
      <Header/>


      <div  className='m-5'>

        <Link to='/localtutor'>
        <button className='btn btn-primary mb-4'>Add New Tutor</button>

        
        </Link>

<h3 className=" mb-4 text-success">Tutor List</h3>
      <table class="table table-hover">
        <thead>
          <tr  >
          <th scope="col">Id</th>

            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>

        {users.map(user => (
                        <tr >
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.commonAuth.username}</td>



                            <td>
                            <Link to={`edit/${user.id}`}>

                              <button className='btn btn-primary'>Edit</button>
                    
                    </Link>
                    <button className='btn btn-danger m-2' onClick={() => handleDelete(user.id)}>Delete</button>


                    {/* <button className='btn btn-danger m-2' onClick={() => handleDelete(user.id)}>Delete</button> */}


                    </td>







                        </tr>
                    ))}
        </tbody>
      </table>

      </div>

    </div>
  )
}

export default Listtutors