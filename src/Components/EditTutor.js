


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

function EditTutor() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [idcard, setIdcard] = useState('');
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [commonAuth, setCommonAuth] = useState('')

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTutor();
    }, []);

    const fetchTutor = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/getatutor/${params.id}`);
            const tutordata = response.data;
            setName(tutordata.name);
            setAddress(tutordata.address);
            setPhone(tutordata.phone);
            setEmail(tutordata.email);
            setIdcard(tutordata.idcard);
            setRole(tutordata.commonAuth.role);
            setUsername(tutordata.commonAuth.username);
            setCommonAuth(tutordata.commonAuth);
            
        } catch (error) {
            console.error('Error fetching tutor:', error);
            // Handle error
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try {
            const body = {
                id: params.id,
                name,
                address,
                phone,
                email,
                idcard,
                role,
                username,
                commonAuth
            };
            const response = await axios.post('http://localhost:8000/update-tutor', body);
            alert(response.data.message);
            navigate('/listtutors');
        } catch (error) {
            console.error('Error updating tutor:', error);
            // Handle error
        }
    };

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit} className="form ">
                <p className="title">Edit </p>
                <label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="input" type="text" placeholder="" required />
                    <span>Name</span>
                </label>
                <label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} className="input" type="textarea" placeholder="" required />
                    <span>Address</span>
                </label>
                <label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input" type="text" placeholder="" required />
                    <span>Phone Number</span>
                </label>
                <label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="input" type="email" placeholder="" required />
                    <span>Email</span>
                </label>
                <label>
                    <input value={idcard} onChange={(e) => setIdcard(e.target.value)} className="input" type="text" placeholder="" required />
                    <span>ID Card No</span>
                </label>
                <label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="input">
                        <option disabled value="" selected>Select the Type</option>
                        <option value="tutor">Tutor</option>
                    </select>
                    <span>Type</span>
                </label>
                <label>
    <input value={username} onChange={(e) => setUsername(e.target.value)} className="input" type="text" placeholder="" required />
    <span>Username</span>
</label>
              
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditTutor;
