import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

function Remoteprofile() {
    const [tutor, setTutor] = useState('');

    const params = useParams()
    useEffect(() => {
        // Fetch tutor data based on tutor ID
        const fetchTutorData = async () => {
            try {
                // Make a request to your backend to fetch tutor data
                const response = await axios.get(`http://localhost:8000/remotetutorprofile/${params.id}`);
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

        <h3 className='text-success m-5'>My Profile</h3>


{tutor && (
        <ListGroup className='m-5 p-5'>
          <ListGroup.Item className='m-2 p-3'>Username:{tutor.commonAuth.username}</ListGroup.Item>
          <ListGroup.Item className='m-2 p-3'>Name: {tutor.name}</ListGroup.Item>
          <ListGroup.Item className='m-2 p-3'>Email: {tutor.email}</ListGroup.Item>
          <ListGroup.Item   className='m-2 p-3' >IDcard: {tutor.idcard}</ListGroup.Item>

          <ListGroup.Item className='m-2 p-3' >Address: {tutor.address}</ListGroup.Item>
          <ListGroup.Item className='m-2 p-3' >Phone: {tutor.phone}</ListGroup.Item>

        </ListGroup>
      )}





    </div>
  )
}

export default Remoteprofile