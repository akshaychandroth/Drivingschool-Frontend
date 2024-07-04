import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../CSS/Studentreg.css";

function Studentreg() {

  const[name,setName]= useState()
  const[address,setAddress]=useState()
  const[phone,setPhone]=useState()
  const[email,setEmail]=useState()
  const[role,setRole]=useState()
  const[username,setUsername]=useState()
  const[password,setPassword]=useState()

  const navigate = useNavigate()



  const HandleSumbit=(e)=>{
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


    axios.post('http://localhost:8000/studentregister', { name,address,phone,email,role,username, password })
  .then((res) => {
    if (res.data.status === 'Username already exists') {
      alert('Email already exists. Please use a different email.');
    } else {
      alert('success')
      navigate('/');

    
    }
  })
  .catch((err) => console.log(err));

  }





  return (
    <div  className="background2">
      <form onSubmit={HandleSumbit} class="form mt-5">
        <p class="title">Register </p>

        <label>
          <input onChange={(e)=>setName(e.target.value)} class="input" type="text" placeholder="" required="" />
          <span>Name</span>
        </label>

        <label>
          <input onChange={(e)=>setAddress(e.target.value)} class="input" type="textarea" placeholder="" required="" />
          <span>Address</span>
        </label>

        <label>
          <input  onChange={(e)=>setPhone(e.target.value)}  class="input" type="text" placeholder="" required="" />
          <span>Phone Number</span>
        </label>

        <label>
          <input     onChange={(e)=>setEmail(e.target.value)}  class="input" type="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" placeholder="" required />
          <span>Email</span>
        </label>

        <label>
          <select  onChange={(e)=>setRole(e.target.value)}  class="input">
            <option selected disabled class="input">
              Select the Type
            </option>
            <option class="input" value="student">
              Student
            </option>
            <option class="input" value="remotestudent">
              Remote Student
            </option>
          </select>
          <span>Type</span>
        </label>
        <label>
          <input  onChange={(e)=>setUsername(e.target.value)}  class="input" type="text" placeholder="" required="" />
          <span>Username</span>
        </label>

        <label>
          <input  onChange={(e)=>setPassword(e.target.value)}  class="input" type="password" placeholder="" required="" />
          <span>Password</span>
        </label>

        <button class="submit">Submit</button>
      </form>
    </div>
  );
}

export default Studentreg;
