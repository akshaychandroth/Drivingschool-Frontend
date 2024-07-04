import React from 'react'
import "../CSS/Addvechicle.css"
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import uuid from 'react-uuid';
import { useEffect } from 'react'
import Header from './Header'


function Addvechicle() {
  const[id,setId]=useState('')

  const[type,setType]=useState()
  const[vechicleno,setVechicleno]=useState()
  const[model,setModel]=useState()
  const[color,setColor]=useState()
  const[rgno,setRgno]=useState()
  const navigate = useNavigate()
  useEffect(()=>{
    // for unique id
setId(uuid().slice(0,3));
},[])
    
const handleSumbit=(e)=>{
  e.preventDefault()


  if (!type || !vechicleno || !model || !color || !rgno) {
    alert('Please fill in all fields.');
    return;
  }
  
  axios.post('http://localhost:8000/cars', {id,type,vechicleno,model,color,rgno })
  .then((res) => {
    if (res.data.status === 'Car already exists') {
      alert('Car already exists.');
    } else {
      alert('success')
      navigate('/listcars');


    }
  })
  .catch((err) => console.log(err));


}
  return (


    <div>
          <Header/>

       <form onSubmit={handleSumbit} class="form mt-5">
        <p class="title">Add Vechicle</p>


        
        <label>
          <select  onChange={(e)=>setType(e.target.value)} class="input">
          <option selected disabled  >
              Vechicle Type
            </option>
            
            <option  class="input" value="car">
              Car
            </option>
            <option  class="input" value="bike">
              Motorcycle
            </option>
           
          </select>
        </label>

        <label>
          <input  onChange={(e)=>setVechicleno(e.target.value)} class="input" type="text" placeholder="" required="" />
          <span>Vechicle No</span>
        </label>

        <label>
          <input  onChange={(e)=>setModel(e.target.value)} class="input" type="textarea" placeholder="" required="" />
          <span>Vechicle Model</span>
        </label>

        <label>
          <input  onChange={(e)=>setColor(e.target.value)} class="input" type="text" placeholder="" required="" />
          <span>Vechicle Color</span>
        </label>

        <label>
          <input  onChange={(e)=>setRgno(e.target.value)} class="input" type="text" placeholder="" required="" />
          <span>Registration Number</span>
        </label>


       

        <button class="submit">Register</button>
      </form>

    </div>
  )
}

export default Addvechicle