import React, { useEffect ,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Header from './Header';
import Listtutors from './Listtutors';
import axios from 'axios';


function Adminpanel() {

  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const response = await axios.get('http://localhost:8000/ratings'); // Update the endpoint accordingly
      setRatings(response.data.ratings);
    } catch (error) {
      console.error('Error fetching ratings:', error);
      // Handle error
    }
  };
 

  

  const location = useLocation();
  const token = location.state && location.state.token;
  const role = location.state && location.state.role;
  const username =location.state && location.state.username;
  


  console.log("Token in Adminpanel:", token);


  const navigate =useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/", { replace: true });
    // Reload the page to clear navigation history
    window.location.reload();
  };
  return (
    <div>

      <Header/>



{/* 
<Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand className='text-white fs-3' href="#home">Driving School</Navbar.Brand>
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
          

          <Nav.Link className='text-white fs-4' href="#link"> <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}


<h2 className="text-success m-4 mt-4">Ratings</h2>
      <table className="table m-2">
        <thead className=''>
          <tr>
            <th>Session Name</th>
            <th>Tutor Name</th>
            <th>Session Rating</th>
            <th>Tutor Rating</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map(rating => (
            <tr key={rating._id}>
              <td>{rating.session.sessionname}</td>
              <td>{rating.tutor.name}</td>
              <td>{rating.sessionRating}</td>
              <td>{rating.tutorRating}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  )
}

export default Adminpanel