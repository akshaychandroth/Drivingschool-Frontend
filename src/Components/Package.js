import React from 'react'
import { useState   } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import uuid from 'react-uuid';
import { useEffect } from 'react'
import Header from './Header';

function Package() {
    const[id,setId]=useState('')

    const[type,setType]=useState()
    const[packagename,setPackagename]=useState()
    const[descripition,setDescription]=useState()
    const[amount,setAmount]=useState()
    const navigate = useNavigate()

    useEffect(()=>{
        // for unique id
    setId(uuid().slice(0,3));
    },[])

    const handleSumbit=(e)=>{
        e.preventDefault()
      
      
      
        
        axios.post('http://localhost:8000/package', {id,type,packagename,descripition,amount })
        .then((res) => {
          if (res.data.status === 'Package already exists') {
            alert('Package already exists.');
          } else {
            alert('success')
            navigate('/listpackage')
      
      
          }
        })
        .catch((err) => console.log(err));
      
      
      }
   
  return (
    <div>

      <Header/>
       <form onSubmit={handleSumbit}  class="form mt-5">
        <p class="title">Add Vechicle</p>


        
        <label>
          <select  onChange={(e)=>setType(e.target.value)} class="input">
          <option selected disabled  >
              Vechicle Type
            </option>
            
            <option  class="input" value="car">
              Car
            </option>
           
          </select>
        </label>

        <label>
          <input  onChange={(e)=>setPackagename(e.target.value)} class="input" type="text" placeholder="" required="" />
          <span>Package Name</span>
        </label>

        <label>
          <input  onChange={(e)=>setDescription(e.target.value)} class="input" type="textarea" placeholder="" required="" />
          <span>Description</span>
        </label>

        <label>
          <input  onChange={(e)=>setAmount(e.target.value)} class="input" type="text" placeholder="" required="" />
          <span>Amount</span>
        </label>

     


       

        <button class="submit">Add</button>
      </form>

    </div>
  )
}

export default Package