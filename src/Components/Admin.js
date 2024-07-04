import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Admin() {

    const[username,setUsername]=useState()
    const[password,setPassword]=useState()
    const[role,setRole]=useState()



    const handleSubmit = (e)=>{
        e.preventDefault()

        

        
  axios.post('http://localhost:8000/adminregister', { username,password,role })
  .then((res) => {
    if (res.data.status === 'Username already exists') {
      alert('Email already exists. Please use a different email.');
    } else {
        alert('Sucess')
    }
  })
  .catch((err) => console.log(err));
    }
  return (
    <div>


<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control onChange={(e)=>setUsername(e.target.value)} type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="name@example.com" />
      </Form.Group>

      <Form.Select onChange={(e)=>setRole(e.target.value)} aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="admin">Admin</option>
    </Form.Select>
    
    <Button variant="primary" type="submit">
        Submit
      </Button>

      </Form>





        
    </div>
  )
}

export default Admin