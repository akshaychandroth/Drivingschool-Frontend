import React from 'react'
import { useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../CSS/Studentpanel.css'
import { useNavigate } from 'react-router-dom';
import '../CSS/remote.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

function Studentpanel() {
  
  const location = useLocation();
  const token = location.state && location.state.token;
  const role = location.state && location.state.role;
  const username =location.state && location.state.username;
  const id = location.state && location.state.id
  const navigate=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/", { replace: true });
    // Reload the page to clear navigation history
    window.location.reload();
  };
  return (
    <div className='student'>



        
<Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className='text-warning fs-3' href="/studentpanel">Driving School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">


           







          <Link style={{textDecoration:'none'}}  to={`/packages/${id}`} >

          <Nav.Link className='text-white fs-4' href="#link">Packages</Nav.Link>

          </Link>

          <Link style={{textDecoration:'none'}}  to={`/selectedpackages/${id}`} >

<Nav.Link className='text-white fs-4' href="#link">My Packages</Nav.Link>

</Link>

          <Nav.Link className='text-white fs-4' href="#link"> <button className="btn btn-danger"  onClick={handleLogout}  >Logout</button>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


<div className='remote'>

</div>

   <div className='student'>

  <h1 className='text-center text-primary  '> The Best driving School so far...... </h1>
  <h1 className='mt-5 text-center text-success'> Millons of Students rated as #1 </h1>

   </div>


   <div className='student1'>
    <div className="row">
      <div className="col-md-4">
        <img src="https://img.freepik.com/free-photo/happy-driving-student-with-car-keys_1391-2312.jpg?size=626&ext=jpg" alt="" />
        <h2>Alice</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, autem? Facere, odit iste! Nemo eveniet dicta earum repudiandae sequi asperiores dolorem quisquam odit. Atque sit reprehenderit voluptas et libero possimus.</p>
      </div>
      <div className="col-md-4">
      <img src="https://img.freepik.com/free-photo/happy-driving-student-with-car-keys_1391-2312.jpg?size=626&ext=jpg" alt="" />
      <h2>Alice</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, autem? Facere, odit iste! Nemo eveniet dicta earum repudiandae sequi asperiores dolorem quisquam odit. Atque sit reprehenderit voluptas et libero possimus.</p>


      </div>
      <div className="col-md-4">
      <img src="https://img.freepik.com/free-photo/happy-driving-student-with-car-keys_1391-2312.jpg?size=626&ext=jpg" alt="" />
      <h2>Alice</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, autem? Facere, odit iste! Nemo eveniet dicta earum repudiandae sequi asperiores dolorem quisquam odit. Atque sit reprehenderit voluptas et libero possimus.</p>


      </div>

    </div>
   </div>
   <div className="section4">
        <div className="row">
          <div className="col-md-3 m-5">
            <img width={'40px'} height={'40px'}src="https://topdrive.com.ph/wp-content/uploads/2021/05/top-drive-logo-driving-school-batangas-1.png" alt="" />
            <h4 className='text-warning'>Driving School</h4>
            <h5 className='mt-5'>We offer a luxurious and stylish transportation option for various occasions and events. Whether you're planning a special celebration, corporate event, wedding, prom night, or simply desire a sophisticated ride.</h5>
          <p><InstagramIcon/> <FacebookIcon /> <EmailIcon/></p>
          
          </div>
          <div className="col-md-2 m-5">
           
          </div>
          <div className="col-md-3 m-5">
            <h2 className=''>Our Services</h2>
            <h5 className='mt-5'>Assistance</h5>
            <h5>Licence</h5>
            <h5>Classes</h5>
          </div>
        </div>
      </div>




   

    </div>)
}

export default Studentpanel