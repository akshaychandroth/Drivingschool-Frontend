



import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import '../CSS/Home.css';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

function Home() {
  return (
    <div>
      <div className='main'>
        <nav className="navbar navbar-expand-lg bg-transparent" data-bs-theme="dark">
          <div className="container-fluid">
          <img
              src="https://topdrive.com.ph/wp-content/uploads/2021/05/top-drive-logo-driving-school-batangas-1.png"
              width="40"
              height="40"
              className="d-inline-block align-top p-1"
              alt="React Bootstrap logo"
            />
            <h2 className='text-dark'>Driving <span className='text-warning'> School</span></h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mx-3 ms-auto m-2 text-dark">
                <li className="nav-item">
                  <Link to='/login'>
                    <a className="nav-link fs-4 text-dark" href="#"><LoginIcon /> Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/register'>
                    <a className="nav-link fs-4 text-dark" href="#"><AppRegistrationIcon /> Register</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
      <div className='section'>
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center mt-5">
            <h3 className='h3section text-dark'>We are more than </h3>
            <h2 className='text-warning'>A Driving School</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className='mt-3 rounded-4 image-hover' width={'600px'} height={'350px'} src="https://www.mhdrivingschool.co.uk/wp-content/uploads/2020/08/mh-driving-school-slider-1.jpg" alt="" />
          </div>
        </div>
      </div>
      
      <div className='section1'>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img className='rounded-4 m-4 image-hover' width={'400px'} height={'500px'} src="https://www.insurethebox.com/wp-content/uploads/2020/11/image-min.jpg" alt="" />
          </div>
          <div className="col-md-4 col-sm-12">
            <img className='rounded-4 m-4 image-hover' width={'400px'} height={'500px'} src="https://www.rydeshopper.com/car-buying-tips/assets/51f24f49-1321-4041-ad33-6731bf418c44" alt="" />
          </div>
          <div className="col-md-4 col-sm-12">
            <img className='rounded-4 m-4 image-hover' width={'400px'} height={'500px'} src="https://ticketschool.com/wp-content/uploads/2020/03/woman-successfully-passed-driving-school-test.jpg" alt="" />
          </div>
        </div>
      </div>
      
      <div className="section3">
        <h1 className='text-center text-success mb-5 '>Unveiling the Stories Behind <br/>
          <span className='text-white '>the Steering Wheel</span> 
        </h1>
        <div className="row">
          <div className="col-md-4">
            <img className='image m-3 rounded-4 image-hover' width={'450px'} height={'250px'} src="https://www.drivingschool.marketing/wp-content/uploads/2018/03/Z1.jpg" alt="" />
            <h3 className='ms-4'>the Ultimate Stories</h3>
            <p className='ms-4'>The story of success is Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas corrupti reiciendis voluptate? Sequi, deserunt dolorem facere inventore dignissimos voluptatibus nesciunt quas quaerat maxime illo reiciendis eligendi vero similique ratione!</p>
          </div>
          <div className="col-md-4">
            <img className='image m-3 rounded-4 image-hover' width={'450px'} height={'250px'} src="https://wallpapercave.com/wp/wp8413230.jpg" alt="" />
            <h3 className='ms-4'>the Ultimate Stories</h3>
            <p className='ms-4'>The story of success is Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas corrupti reiciendis voluptate? Sequi, deserunt dolorem facere inventore dignissimos voluptatibus nesciunt quas quaerat maxime illo reiciendis eligendi vero similique ratione!</p>
          </div>
          <div className="col-md-4">
            <img className='image m-3 rounded-4 image-hover' width={'450px'} height={'250px'} src="https://i.pinimg.com/originals/c2/f2/94/c2f29461417ca84d3424ddec020eee8b.jpg" alt="" />
            <h3 className='ms-4'>the Ultimate Stories</h3>
            <p className='ms-4'>The story of success is Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas corrupti reiciendis voluptate? Sequi, deserunt dolorem facere inventore dignissimos voluptatibus nesciunt quas quaerat maxime illo reiciendis eligendi vero similique ratione!</p>
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
            <h2 className=''>Links</h2>
            <h5 className='mt-5'>Home</h5>
            <h5>Login</h5>
            <h5>Register</h5>
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

export default Home;
