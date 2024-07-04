import React from 'react'
import { useLocation } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Headerone() {
    const location = useLocation();
    const token = location.state && location.state.token;
    const role = location.state && location.state.role;
    const username =location.state && location.state.username;
    const id = location.state && location.state.id
  return (
    <div>

        
<Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className='text-white fs-3' href="#home">Driving School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">


           







          <Link to={`/packages/${id}`} >

          <Nav.Link className='text-white fs-4' href="#link">Packages</Nav.Link>

          </Link>

          <Link to={`/selectedpackages/${id}`} >

<Nav.Link className='text-white fs-4' href="#link">My Packages</Nav.Link>

</Link>

          <Nav.Link className='text-white fs-4' href="#link"> <button className="btn btn-danger" >Logout</button>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </div>
  )
}

export default Headerone