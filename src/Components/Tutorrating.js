import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Tutorrating() {
    const params = useParams();
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        // Fetch tutor ratings when the component mounts
        const fetchTutorRatings = async () => {
            try {

                const res = await axios.get(`http://localhost:8000/partitut/${params.id}`);
            const tutorId = res.data.tutor._id;
    


                const response = await axios.get(`http://localhost:8000/ratings/${tutorId}`);
                setRatings(response.data);
            } catch (error) {
                console.error('Error fetching tutor ratings:', error);
            }
        };

        fetchTutorRatings();
    }, []);

    return (
        <div>
            <h2 className='text-success m-5'>Session Ratings</h2>
            <table className="table m-5">
                <thead>
                    <tr className=''>
                        <th>Session ID</th>
                        <th>Session Rating</th>
                        <th>Tutor Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {ratings.map((rating) => (
                        <tr key={rating._id}>
                            <td>{rating.session.sessionname}</td>
                            <td>{rating.sessionRating}</td>
                            <td>{rating.tutorRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tutorrating;
