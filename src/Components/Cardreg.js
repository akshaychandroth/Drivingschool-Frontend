import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../CSS/Cardreg.css";
import { Link } from "react-router-dom";

function Cardreg() {
  return (
    <div className="background1">
      <Navbar bg="transparent" variant="dark" fixed="top">
        <Container>

          <Navbar.Brand  className="fs-3 text-white " href="/">
            Driving School
          </Navbar.Brand>
          
          
     
         
        </Container>
      </Navbar>

      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-3 mt-5 ">
          <Card style={{ width: "20rem", marginTop: "50px" }}>
            <Card.Img
              height={"240px"}
              variant="top"
              src="https://wallpapercave.com/wp/wp9632838.jpg"
            />
            <Card.Body>
              <Card.Title>STUDENT</Card.Title>


              <Link to="/studentregister">
              <Button variant="primary">Register Here</Button>

    </Link> 

            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3  mt-5">
          <Card style={{ width: "20rem", marginTop: "50px" }}>
            <Card.Img
              height={"240px"}
              variant="top"
              src="https://cdn2.comparethemarket.com/market/cms/cms-images/studentdriver_HxW0483x0724_aecf3d4f-fbf2-4fc6-8875-a89d1f775e8c.jpeg"
            />
            <Card.Body>
              <Card.Title>TUTOR</Card.Title>

    <Link to="/remotetutorreg">
    <Button variant="primary">Register Here</Button>

    </Link>          

            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Cardreg;
