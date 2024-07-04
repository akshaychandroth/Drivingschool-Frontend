

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TutorSession() {
  const [sessions, setSessions] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = () => {
    axios.get('http://localhost:8000/tutorsession')
      .then(res => {
        setSessions(res.data);
      })
      .catch(err => console.log(err));
  };

const handleSessionSelection = async (sessionId) => {
    try {
      const response = await axios.get(`http://localhost:8000/partitut/${params.id}`);
      const tutorId = response.data.tutor._id;
  
      const session = sessions.find(session => session._id === sessionId);
  
      // Check if session is already selected
      if (session.tutor === tutorId) {
        alert('You have already selected this session.');
        return;
      } else if (session.tutor) {
        alert('This session is already selected by another tutor.');
        return;
      }
  
      // Check if session is from yesterday
      const sessionDate = new Date(session.date);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (sessionDate <= yesterday) {
        alert('You cannot select past sessions.');
        return;
      }
  
      const res = await axios.post(`http://localhost:8000/${sessionId}/addTutor`, { tutorId });
  
      if (res.data.success) {
        alert('Session selected successfully!');
        // Update session locally instead of refetching
        setSessions(prevSessions => {
          const updatedSessions = prevSessions.map(s => s._id === sessionId ? { ...s, tutor: tutorId } : s);
          return updatedSessions;
        });
      } else {
        alert('Failed to select session.');
      }
    } catch (error) {
      console.error('Error selecting session:', error);
      alert('An error occurred while selecting the session.');
    }
  };
  
  
  return (
    <div className="container">
      <h2 className=" text-success mb-4 mt-4">Sessions</h2>
      <div className="row">
        {sessions.map(session => (
          <div key={session._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{session.sessionname}</h5>
                <p className="card-text">{session.description}</p>
                <p className="card-text">Date: {session.date}</p>
                <p className="card-text">Duration: {session.duration}</p>
                <button onClick={() => handleSessionSelection(session._id)} className="btn btn-primary">Select Session</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TutorSession;
