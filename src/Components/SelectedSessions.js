



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function SelectedSessions() {
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchSelectedSessions = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/parti/${params.id}`);
        const studentId = res.data.student._id;

        const response = await axios.get(`http://localhost:8000/sessions/selected/${studentId}`);
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

  const handleSessionCompletion = async (sessionId, sessionDate, index) => {
    try {
      const currentDate = new Date();
      if (new Date(sessionDate) <= currentDate) {
        const updatedSessions = [...selectedSessions];
        updatedSessions[index].finished = true;
        setSelectedSessions(updatedSessions);

        await axios.put(`http://localhost:8000/sessions/${sessionId}`, { finished: true });
      } else {
        alert('Cannot mark session as completed before the session date.');
      }
    } catch (error) {
      console.error('Error updating session completion status:', error);
    }
  };

  const handleRateSession = (sessionId) => {
    // Implement your logic for handling session rating here
    console.log('Rate session:', sessionId);
  };

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
              <Card.Text>Tutor: {session.tutor ? session.tutor.name : 'Unknown'}</Card.Text>
              <Card.Text>Description: {session.descripition}</Card.Text>
              <Button variant={session.finished ? "success" : "warning"} onClick={() => handleSessionCompletion(session._id, session.date, index)} disabled={session.finished}>
                {session.finished ? "Completed" : "Mark as Completed"}
              </Button>
              {session.finished && (


<Link to={`/parti/${params.id}/sessions/${session._id}`}>

                <Button variant="primary" className="m-2" >
                  Rate Session
                </Button>
                </Link>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SelectedSessions;
