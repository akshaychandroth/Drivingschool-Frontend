import React from 'react'
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect , useState } from 'react';
import axios from 'axios';
import '../CSS/remote.css'

function Tutorpanel() {
  
  const location = useLocation();
  const token = location.state && location.state.token;
  const role = location.state && location.state.role;
  const username =location.state && location.state.username;
  const id = location.state && location.state.id
  const navigate=useNavigate()
  const [tutor, setTutor] = useState('');



    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate("/", { replace: true });
      // Reload the page to clear navigation history
      window.location.reload();
    };

console.log(tutor);

  return (
    <div>

        
<Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className='text-white fs-3' href="#home">Driving School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">


           







          <Link  style={{textDecoration:'none'}}  to={`/assignedstudents/${id}`}>

          <Nav.Link className='text-white fs-4' href="#link">Assigned Student</Nav.Link>

          </Link>

          <Link  style={{textDecoration:'none'}}  to={`/tutorprofile/${id}`}>

<Nav.Link className='text-white fs-4' href="#link">My Profile</Nav.Link>

</Link>



          <Nav.Link className='text-white fs-4' href=""> <button className="btn btn-danger" onClick={handleLogout} >Logout</button>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




<div className='remote'>

</div>










   










    </div>
  )
}

export default Tutorpanel