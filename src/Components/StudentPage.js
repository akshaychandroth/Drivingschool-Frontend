import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const StudentPage = () => {
  const [visibleSessions, setVisibleSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    const fetchStudentId = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/parti/${params.id}`);
        const fetchedStudentId = response.data.student ? response.data.student._id : null;
        setStudentId(fetchedStudentId);
      } catch (error) {
        console.error('Error fetching student ID:', error);
        setError(error);
      }
    };

    fetchStudentId();
  }, [params.id]);

  const handleSessionSelection = async (sessionId) => {
    try {
      if (!studentId) {
        window.alert('Student ID is null. Please try again later.');
        return;
      }

      const response = await axios.post(`http://localhost:8000/sessions/${sessionId}/select/${studentId}`);
      console.log(response.data.message);
      window.alert(response.data.message); // Display alert message from the server
      // Optionally, update UI to reflect session selection
    } catch (error) {
      if (error.response.status === 400 && error.response.data.message === 'Session already selected') {
        window.alert('Session already selected. Please choose another session.');
      } else {
        console.error('Error selecting session:', error.response.data.message);
        window.alert(error.response.data.message); // Display error message as alert
        // Optionally, display error message to the user
      }
    }
  };

  useEffect(() => {
    const fetchVisibleSessions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/sessions/visible');
        setVisibleSessions(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching visible sessions:', error);
        setError(error);
      }
    };

    fetchVisibleSessions();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className='text-success m-5'>Sessions</h2>
      <div className="d-flex flex-wrap m-5">
        {visibleSessions.map(session => (
          <Card key={session._id} className="m-2" style={{ width: '28rem' }}>
            <Card.Body>
              <Card.Title>{session.sessionname}</Card.Title>
              <Card.Text>Date: {new Date(session.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Card.Text>
              <Card.Text>Tutor: {session.tutor ? session.tutor.name : 'Unknown'}</Card.Text>
              <Card.Text>Description: {session.description}</Card.Text>
              <Button onClick={() => handleSessionSelection(session._id)}>Select Session</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentPage;
