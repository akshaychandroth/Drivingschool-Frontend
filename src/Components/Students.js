import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";

function Students() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/students");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error.message)
    }
  };

  return (
    <div className="">
      <Header/>
      <div className="m-5">
        <h3 className=" mb-4 text-success">Student List</h3>
      <table class="table table-hover">
        <thead>
          <tr  >
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>

        {users.map(user => (
                        <tr >
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.commonAuth.username}</td>










                        </tr>
                    ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Students;
