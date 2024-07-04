import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
function Tutorselected() {
    const [selectedSessions, setSelectedSessions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    useEffect(() => {
        const fetchSelectedSessions = async () => {
          try {
            const res = await axios.get(`http://localhost:8000/partitut/${params.id}`);
            const tutorId = res.data.tutor._id;
    
            const response = await axios.get(`http://localhost:8000/tutorsessions/selected/${tutorId}`);
            setSelectedSessions(response.data);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching selected sessions:', error);
            setError(error);
            setIsLoading(false);
          }
        };
    
        fetchSelectedSessions();
      }, [params.id]);
  
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
  return (
    <div>
    <h2 className='text-info m-5'>Selected Sessions</h2>
    <div className="d-flex flex-wrap m-5">
      {selectedSessions.map((session, index) => (
        <Card key={session._id} className="m-2" style={{ width: '28rem' }}>
          <Card.Body>
            <Card.Title>{session.sessionname}</Card.Title>
            <Card.Text>Date: {new Date(session.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Card.Text>
            {/* <Card.Text>Tutor: {session.tutor ? session.tutor.name : 'Unknown'}</Card.Text> */}
            <Card.Text>Description: {session.descripition}</Card.Text>
          
            
          </Card.Body>
        </Card>
      ))}
    </div>
  </div>  )
}

export default Tutorselected