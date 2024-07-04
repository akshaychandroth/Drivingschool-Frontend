import React from 'react'
import { useState   } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import uuid from 'react-uuid';
import { useEffect } from 'react'
import Header from './Header';

function Session() {
    const[id,setId]=useState('')
    const[remotetutors,setRemotetutors]= useState([])
    const[type,setType]=useState()
    const[sessionname,setSessionname]=useState()
    const[descripition,setDescription]=useState()
    const[date,setDate]=useState()
    const[duration,setDuration]=useState()
    // const[tutor,setTutors]=useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        // for unique id
    setId(uuid().slice(0,3));



    axios.get('http://localhost:8000/listremotetutors')
    .then(res => setRemotetutors(res.data))
    .catch(err => console.log(err));
    },[])

    const handleSumbit=(e)=>{
        e.preventDefault()
      
      
      
        
        axios.post('http://localhost:8000/session', {id,sessionname,descripition,date,duration })
        .then((res) => {
          if (res.data.status === 'Session already exists') {
            alert('Session already exists.');
          } else {
            alert('success')
            // navigate('/listpackage')
      
      
          }
        })
        .catch((err) => console.log(err));
      
      
      }
   
  return (
    <div>

        <Header/>

     <form onSubmit={handleSumbit}  class="form mt-5">
      <p class="title">Add Session</p>


     

      <label>
        <input  onChange={(e)=>setSessionname(e.target.value)} class="input" type="text" placeholder="" required="" />
        <span>Session Name</span>
      </label>
      

      <label>
        <input  onChange={(e)=>setDescription(e.target.value)} class="input" type="textarea" placeholder="" required="" />
        <span>Description</span>
      </label>




      <label>
        <input  onChange={(e)=>setDate(e.target.value)} class="input" type="date" placeholder="" required="" />
        <span>Date</span>
      </label>

      <label>
        <input  onChange={(e)=>setDuration(e.target.value)} class="input" type="text" placeholder="" required="" />
        <span>Duration</span>
      </label>

   


     

      <button class="submit">Add</button>
    </form>

  </div>
  )
}

export default Session