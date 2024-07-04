import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Ratesession() {
  const [tutorId, setTutorId] = useState('');
    const params = useParams();
     
    const [sessionRating, setSessionRating] = useState('');
    const [tutorRating, setTutorRating] = useState('');
const partiId = params.partiId;
const sessionId = params.sessionId;
const navigate = useNavigate()


console.log(partiId);
console.log(sessionId);


useEffect(() => {
  // Fetch session details including tutor ID
  const fetchSessionDetails = async () => {
      try {
          const response = await axios.get(`http://localhost:8000/tutorsessions/${sessionId}`);
          const { tutorId } = response.data; // Assuming tutorId is a field in the session document
          setTutorId(tutorId);
      } catch (error) {
          console.error('Error fetching session details:', error);
          // Handle error
      }
  };

  fetchSessionDetails();
}, [sessionId]);



const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const ratingData = {
          session: sessionId,
          tutor: tutorId,
          student: partiId,
          sessionRating,
          tutorRating
      };
      const response = await axios.post('http://localhost:8000/ratings', ratingData);
      console.log(response.data); // Handle success response as needed
      alert('Rated successfully')
  } catch (error) {
      console.error('Error rating session:', error);
      alert('already rated')


      // Handle error
  }
};



console.log(tutorId);






  return (
    <div>

<form className="form mt-5" onSubmit={handleSubmit}>
                <p className="title">Rating</p>
                <label htmlFor="session">
                    <select className="input" id="session" onChange={(e) => setSessionRating(e.target.value)}>
                        <option value="">Session Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <span>Session</span>
                </label>
                <label htmlFor="tutor">
                    <select className="input" id="tutor" onChange={(e) => setTutorRating(e.target.value)}>
                        <option value="">Tutor Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <span>Tutor</span>
                </label>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>

    </div>
  )
}

export default Ratesession