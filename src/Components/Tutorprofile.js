import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Tutorprofile() {
    const params= useParams()
    const [tutor, setTutor] = useState('');
    useEffect(() => {
        // Fetch tutor data based on tutor ID
        const fetchTutorData = async () => {
            try {
                // Make a request to your backend to fetch tutor data
                const response = await axios.get(`http://localhost:8000/tutorprofile/${params.id}`);
                // Assuming response.data contains tutor information
                setTutor(response.data);
            } catch (error) {
                console.error('Error fetching tutor data:', error);
            }
        };
    
        if (params.id) {
            fetchTutorData();
        }
    }, [params.id]);

  return (
    <div>
        <h2 className='text-primary m-3'>My Profile</h2>




{tutor && (
        <ListGroup className='m-5 p-5'>
          <ListGroup.Item className='m-2'>Username:{tutor.commonAuth.username}</ListGroup.Item>
          <ListGroup.Item className='m-2'>Name: {tutor.name}</ListGroup.Item>
          <ListGroup.Item className='m-2'>Email: {tutor.email}</ListGroup.Item>
          <ListGroup.Item   className='m-2' >IDcard: {tutor.idcard}</ListGroup.Item>

          <ListGroup.Item className='m-2' >Address: {tutor.address}</ListGroup.Item>
          <ListGroup.Item className='m-2' >Phone: {tutor.phone}</ListGroup.Item>

        </ListGroup>
      )}
    </div>
  )
}

export default Tutorprofile