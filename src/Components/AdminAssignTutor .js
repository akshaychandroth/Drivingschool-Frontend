
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../CSS/Assigntutor.css'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function AdminAssignTutor () {
    const [tutors, setTutors] = useState([]);
    const [students, setStudents] = useState([]);
    const [selectedTutor, setSelectedTutor] = useState('');
    const [selectedStudent, setSelectedStudent] = useState('');
    const navigate = useNavigate()



    useEffect(() => {
        axios.get('http://localhost:8000/listtutors')
          .then(res => setTutors(res.data))
          .catch(err => console.log(err));
    
        // axios.get('http://localhost:8000/students')
        //   .then(res => setStudents(res.data))
        //   .catch(err => console.log(err));

        axios.get('http://localhost:8000/students-without-tutor') 
        .then(res => setStudents(res.data))
        .catch(err => console.log(err));
      }, []);
    
      const handleAssignTutor = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/assign-tutor/${selectedStudent}`, { tutorId: selectedTutor })
        .then(res => {
            console.log(res.data);
            navigate('/adminpanel')
        
          })
          .catch(err => console.log(err));
      };




  return (
    <div > 
         
        {/* <div >
    <h1>Assign Tutor to Student</h1>
    <div>
      <label htmlFor="tutor">Select Tutor:</label>
      <select id="tutor" onChange={(e) => setSelectedTutor(e.target.value)}>
        <option value="">Select Tutor</option>
        {tutors.map(tutor => (
          <option key={tutor._id} value={tutor._id}>{tutor.name}</option>
        ))}
      </select>
    </div>
    <div>
      <label htmlFor="student">Select Student:</label>
      <select id="student" onChange={(e) => setSelectedStudent(e.target.value)}>
        <option value="">Select Student</option>
        {students.map(student => (
          <option key={student._id} value={student._id}>{student.name}</option>
        ))}
      </select>
    </div>
    <button onClick={handleAssignTutor}>Assign Tutor</button>
  </div>  */}
   

<Header/>


<form  className="form mt-5">

       
<p class="title">Assign Tutor </p>

      
        <label htmlFor="student">
        <select className='input' id="tutor" onChange={(e) => setSelectedTutor(e.target.value)}>
        <option className='input' value="">Select Tutor</option>
        {tutors.map(tutor => (
          <option key={tutor._id} value={tutor._id}>{tutor.name}</option>
        ))}
      </select>
          <span>Tutor</span>
        </label>


        <label  htmlFor="student">
        <select className='input' id="student" onChange={(e) => setSelectedStudent(e.target.value)}>
        <option className='input' value="">Select Student</option>
        {students.map(student => (
          <option key={student._id} value={student._id}>{student.name}</option>
        ))}
      </select>
          <span>Student</span>
        </label>
       

       
        <button  onClick={handleAssignTutor} className='btn btn-success'>Submit</button>
      </form>
  </div>
  )
}

export default AdminAssignTutor 