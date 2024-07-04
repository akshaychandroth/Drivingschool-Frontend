import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../CSS/remote.css'

function Remotetutpanel() {
  const location = useLocation();
  console.log("Location State:", location.state);

  const token = location.state && location.state.token;
  const role = location.state && location.state.role;
  const username = location.state && location.state.username;
  const id = location.state && location.state.id;
  const navigate = useNavigate()


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
          <Navbar.Brand className="text-white fs-3" href="/remotetutpanel" >
            Driving School
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                style={{ textDecoration: "none" }}
                to={`/tutorgetsession/${id}`}
              >
                <Nav.Link className="text-white fs-4" href="#home">
                  Sessions
                </Nav.Link>
              </Link>

              <Link
                style={{ textDecoration: "none" }}
                to={`/tutormysession/${id}`}
              >
                <Nav.Link className="text-white fs-4" href="#home">
                 My Sessions
                </Nav.Link>
              </Link>
              
              <Link
                style={{ textDecoration: "none" }}
                to={`/tutorrating/${id}`}
              >
                <Nav.Link className="text-white fs-4" href="#home">
                 Rating
                </Nav.Link>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to={`/remotetutorprofile/${id}`}
              >
                <Nav.Link className="text-white fs-4" href="#home">
                 My profile
                </Nav.Link>
              </Link>



              <Nav.Link className="text-white fs-4" href="#link">
            
                <button className="btn btn-danger"  onClick={handleLogout} >Logout</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className="remotetutor"></div>

      <div className="driver ">
      <h2 className="text-center text-warning">“Your vehicle is not just a means of transportation; <br/> it’s a vessel for your dreams and aspirations.”</h2>
 

      </div>
<div className="driver1">


  <div className="row">
    <div className="col-md-4">
      <img src="https://tse1.mm.bing.net/th?id=OIP.Ple7ITgCxoP2A1Hh6FRPKgHaE8&pid=Api&P=0&h=180" alt="" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, reiciendis amet. Non architecto facilis excepturi qui consequatur quam nisi, iure itaque voluptatibus tempora placeat praesentium enim reiciendis rem, ducimus id?</p>
    </div>
    <div className="col-md-4">
    <img src="https://tse1.mm.bing.net/th?id=OIP.Ple7ITgCxoP2A1Hh6FRPKgHaE8&pid=Api&P=0&h=180" alt="" />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, reiciendis amet. Non architecto facilis excepturi qui consequatur quam nisi, iure itaque voluptatibus tempora placeat praesentium enim reiciendis rem, ducimus id?</p>


    </div>
    <div className="col-md-4">
    <img src="https://tse1.mm.bing.net/th?id=OIP.Ple7ITgCxoP2A1Hh6FRPKgHaE8&pid=Api&P=0&h=180" alt="" />
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, reiciendis amet. Non architecto facilis excepturi qui consequatur quam nisi, iure itaque voluptatibus tempora placeat praesentium enim reiciendis rem, ducimus id?</p>


    </div>

  </div>

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

export default Remotetutpanel;
