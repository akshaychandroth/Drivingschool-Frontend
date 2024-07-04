import React, { useState } from "react";
import "../CSS/Login.css";
import { Navbar, Container } from "react-bootstrap";
import { Link  } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {

  const[username,setUsername]=useState()
  const[password,setPassword]=useState()
  const navigate = useNavigate()


const handleSumbit =(e)=>{
  e.preventDefault()
  axios.post('http://localhost:8000/login',{ username , password})
  .then(res=>{

    
    if(res.data.Status === "Success"){
      // localStorage.setItem('token', res.data.token);
      const token =res.data.token;
      localStorage.setItem("token", token);

    if(res.data.role ==="admin"){


      navigate("/adminpanel" ,{ state: { role: res.data.role , username:res.data.username } } ); 
      // window.location.replace("/adminpanel", { token });
    }else if(res.data.role ==='student'){
      // window.location.replace("/studentpanel");
      navigate("/studentpanel",{ state: { role: res.data.role , username:res.data.username , id:res.data.id } } );





    }

    else if(res.data.role ==='remotestudent'){

      navigate("/remotestdpanel",{ state: { role: res.data.role , username:res.data.username , id:res.data.id } } );

   


      
    }

    else if(res.data.role ==='tutor'){
      navigate("/tutorpanel",{ state: { role: res.data.role , username:res.data.username , id:res.data.id } } );



      
    }
    else if(res.data.role==='remotetutor' && res.data.status==="approved"){
      navigate("/remotetutpanel",{ state: { role: res.data.role , username:res.data.username , id:res.data.id } } );



      
    }
    }
    
    else{
      alert('invalid')
    }
      alert(res.data);
  }).catch(err=>console.log(err))
}



  return (
    <div className="background">
      <Navbar bg="transparent" variant="dark" fixed="top">
        <Container>
       
          <Navbar.Brand className="fs-2 text-warning" href="#home">
            Driving School
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div class="login-box">
        <form  onSubmit={handleSumbit}>
          <div class="user-box">
            <input onChange={(e)=>setUsername(e.target.value)} type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input onChange={(e)=> setPassword(e.target.value)} type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div>
            <button class="btn btn-success m-2">Login</button>

            <Link to='/register'>
            <button class="btn btn-dark ">create New Account</button>

            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
