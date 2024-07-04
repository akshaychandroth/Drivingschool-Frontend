import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Header() {
    
  const navigate =useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/", { replace: true });
    // Reload the page to clear navigation history
    window.location.reload();
  };
  return (
    <div>


        
<Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className='text-white fs-3' href="/adminpanel">Driving School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link style={{textDecoration:'none'}} to='/listcars' >           
             <Nav.Link className='text-white fs-4' href="#home">Vechicles</Nav.Link>
           </Link>

           <Link style={{textDecoration:'none'}} to='/students'>
           <Nav.Link className='text-white fs-4' href="#link">Students</Nav.Link>

           
           </Link>


           <Link style={{textDecoration:'none'}} to='/listtutors'>

           <Nav.Link className='text-white fs-4' href="#link">Tutor</Nav.Link>

           </Link>


          <Link style={{textDecoration:'none'}} to='/approve'>
          <Nav.Link className='text-white fs-4' href="#link">RemoteTutor</Nav.Link>

          
          </Link>  

          <Link style={{textDecoration:'none'}} to='/assign-tutor'>
          <Nav.Link className='text-white fs-4' href="#link">Schedule</Nav.Link>

          
          </Link> 
          <Link style={{textDecoration:'none'}} to='/listpackage'>
          <Nav.Link className='text-white fs-4' href="#link">Package</Nav.Link>

          
          </Link>  

          <Link style={{textDecoration:'none'}} to='/addsession'>
          <Nav.Link className='text-white fs-4' href="#link">Session</Nav.Link>

          
          </Link>  
          

          <Nav.Link className='text-white fs-4' href="#link"> <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    





    </div>
  )
}

export default Header