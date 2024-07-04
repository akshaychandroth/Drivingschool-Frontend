// import React from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useState , useEffect } from 'react';


// function Mystudents() {
//     const [assignedStudents, setAssignedStudents] = useState([]);
//   const  params = useParams()
//   console.log(params.id);

//   useEffect(() => {
//     // Fetch assigned students for the logged-in tutor
//     const fetchAssignedStudents = async () => {
//         try {
//             // Make a GET request to your backend API to fetch assigned students
//             const response = await axios.get(`http://localhost:8000/assignedStudents/${params.id}`); // Replace userId with the logged-in user's ID
//             setAssignedStudents(response.data);
//         } catch (error) {
//             console.error('Error fetching assigned students:', error);
//         }
//     };


// // Call the fetchAssignedStudents function
// fetchAssignedStudents();
// }, []);


//   return (
//     <div>
//             <h2>Assigned Students</h2>
//             <ul>
//                 {assignedStudents.map(student => (
//                     <li key={student._id}>
//                         <p>Name: {student.name}</p>
//                         <p>Address: {student.address}</p>
//                         <p>Phone: {student.phone}</p>
//                         <p>Email: {student.commonAuth.username}</p>
//                         {/* Add more fields as needed */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//   )
// }

// export default Mystudents





import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Mystudents() {
    const [assignedStudents, setAssignedStudents] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchAssignedStudents = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/assignedStudents/${params.id}`);
                setAssignedStudents(response.data);
            } catch (error) {
                console.error('Error fetching assigned students:', error);
            }
        };

        fetchAssignedStudents();
    }, [params.id]);

    return (
        <div>
            <h3 className=" m-5 text-success">Assigned Students</h3>
            <div className="row">
                {assignedStudents.map(student => (
                    <div key={student._id} className="col-md-4 mb-4 m-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{student.name}</h5>
                                <p className="card-text">Address: {student.address}</p>
                                <p className="card-text">Phone: {student.phone}</p>
                                <p className="card-text">Username: {student.commonAuth.username}</p>
                                {/* Add more card content as needed */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mystudents;
