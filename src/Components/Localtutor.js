import React from 'react'
import '../CSS/Localtutor.css'
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';


import axios from "axios";
import Header from './Header';

function Localtutor() {
  const[id,setId]=useState('')

    const[name,setName]= useState()
  const[address,setAddress]=useState()
  const[phone,setPhone]=useState()
  const[email,setEmail]=useState()
  const[idcard,setIdcard]=useState()
  const[role,setRole]=useState()
  const[username,setUsername]=useState()
  const[password,setPassword]=useState()
  const navigate = useNavigate()


  useEffect(()=>{
    // for unique id
setId(uuid().slice(0,3));
},[])
  
const handleSumbit=(e)=>{
    e.preventDefault()

    
    if (!name || !address || !phone || !email || !role || !username || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Password validation
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      alert('Phone number must contain exactly 10 digits.');
      return;
    }
  
  
    
    axios.post('http://localhost:8000/localtutor', { id,name,address,phone,email,idcard,role,username, password })
    .then((res) => {
      if (res.data.status === 'Username already exists') {
        alert('Username already exists. Please use a different username.');
      } else {
        alert('success')
        navigate('/listtutors');

  
      }
    })
    .catch((err) => console.log(err));
  
  
  }
  return (
    <div className="background3">

      <Header/>
      <form onSubmit={handleSumbit} class="form">
        <p class="title">Register </p>

        <label>
          <input onChange={(e)=>setName(e.target.value)}  class="input" type="text" placeholder="" required="" />
          <span>Name</span>
        </label>

        <label>
          <input onChange={(e)=>setAddress(e.target.value)}     class="input" type="textarea" placeholder="" required="" />
          <span>Address</span>
        </label>

        <label>
          <input onChange={(e)=>setPhone(e.target.value)}  class="input" type="text" placeholder="" required="" />
          <span>Phone Number</span>
        </label>

        <label>
          <input  onChange={(e)=>setEmail(e.target.value)} class="input" type="email" placeholder="" required="" />
          <span>Email</span>
        </label>

        <label>
          <input  onChange={(e)=>setIdcard(e.target.value)}    class="input" type="text" placeholder="" required="" />
          <span>ID Card No</span>
        </label>
        <label>
          <select onChange={(e)=>setRole(e.target.value)}   class="input">
 
          <option disabled selected class="input" >
              Select the Type
            </option> 
       
            <option  class="input" value="tutor">
              Tutor
            </option>
          </select>
          <span>Type</span>
        </label>

        <label>
          <input  onChange={(e)=>setUsername(e.target.value)}  class="input" type="text" placeholder="" required="" />
          <span>Username</span>
        </label>

        <label>
          <input onChange={(e)=>setPassword(e.target.value)}  class="input" type="password" placeholder="" required="" />
          <span>Password</span>
        </label>

        <button class="submit">Submit</button>
      </form>
    </div>
  )
}

export default Localtutor