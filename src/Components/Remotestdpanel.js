import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../CSS/remote.css'

function Remotestdpanel() {
  const location = useLocation();
  console.log("Location State:", location.state);
  const navigate = useNavigate()

  const token = location.state && location.state.token;
  const role = location.state && location.state.role;
  const username = location.state && location.state.username;
  const id = location.state && location.state.id;

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
          <Navbar.Brand className='text-white fs-3' href="/remotestdpanel">Driving School</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">


<Link style={{ textDecoration: 'none' }} to={`/getsessions/${id}`}>
  <Nav.Link className='text-white fs-4' href="#home">Sessions</Nav.Link>
</Link>


<Link style={{ textDecoration: 'none' }} to={`/mysessions/${id}`}>
  <Nav.Link className='text-white fs-4' href="#home">My Sessions</Nav.Link>
</Link>

<Link style={{ textDecoration: 'none' }} to={`/packagesremote/${id}`} >

<Nav.Link className='text-white fs-4' href="#link">Packages</Nav.Link>

</Link>

<Link style={{ textDecoration: 'none' }} to={`/selectedpackagesremote/${id}`} >

<Nav.Link className='text-white fs-4' href="#link">My Packages</Nav.Link>

</Link>




              <Nav.Link className='text-white fs-4' href="#link">
                <button className="btn btn-danger"  onClick={handleLogout}>Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className='remote'>


      </div>


      <div className='hello'>
        <h1 className='text-center text-warning'>millions of Trusted Students</h1>
        <h1 className='text-center text-dark mt-5'>Keep your Expectations High we are with you</h1>
      </div>

      <div className='hii'>
        <div className="row">
          <div className="col-md-4">
            <img src="https://frogcars.com/wp-content/uploads/2018/10/image1321.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo, quae aliquam nisi veritatis exercitationem officia architecto laboriosam delectus similique saepe inventore molestiae, voluptas dolorem ea quasi est maxime fugit.</p>

          </div>
          <div className="col-md-4">
          <img src="https://frogcars.com/wp-content/uploads/2018/10/image1321.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo, quae aliquam nisi veritatis exercitationem officia architecto laboriosam delectus similique saepe inventore molestiae, voluptas dolorem ea quasi est maxime fugit.</p>

            </div>
            <div className="col-md-4">
            <img src="https://frogcars.com/wp-content/uploads/2018/10/image1321.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo, quae aliquam nisi veritatis exercitationem officia architecto laboriosam delectus similique saepe inventore molestiae, voluptas dolorem ea quasi est maxime fugit.</p>

            </div>
        </div>
      </div>


      <div className='hello1'>

        
      </div>
      <div className="section4">
        <div className="row">
          <div className="col-md-3 m-5">
            <img width={'40px'} height={'40px'}src="https://topdrive.com.ph/wp-content/uploads/2021/05/top-drive-logo-driving-school-batangas-1.png" alt="" />
            <h4 className='text-warning'>Driving School</h4>
            <h5 className='mt-5'>We offer a luxurious and stylish transportation option for various occasions and events. Whether you're planning a special celebration, corporate event, wedding, prom night, or simply desire a sophisticated ride.</h5>
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
  


     

    </div>
  );
}

export default Remotestdpanel;
