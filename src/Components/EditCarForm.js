import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function EditCarForm() {
    const [id, setId] = useState('');
    const [type, setType] = useState('');
    const [vechicleno, setVechicleno] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [rgno, setRgno] = useState('');
    const params = useParams();
    const navigate = useNavigate()

    const fetchCar = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/getacar/${params.id}`);
            const cardata = response.data;
            setId(cardata.id);
            setType(cardata.type);
            setVechicleno(cardata.vechicleno);
            setModel(cardata.model);
            setColor(cardata.color);
            setRgno(cardata.rgno);
        } catch (error) {
            console.error('Error fetching car:', error);
            // Handle error
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = {
                id,
                type,
                vechicleno,
                model,
                color,
                rgno
            };
            const response = await axios.post('http://localhost:8000/update-car', body);
            alert(response.data.message);
            navigate('/listcars')
            
        } catch (error) {
            console.error('Error updating car:', error);
            // Handle error
        }
    };

    useEffect(() => {
        fetchCar();
    }, [params.id]);


    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit} className="form mt-5">
                <p className="title">Edit Vehicle</p>
                <label>
                    <select value={type} onChange={(e) => setType(e.target.value)} className="input">
                        <option disabled>Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="bike">Motorcycle</option>


                    </select>
                </label>
                <label>
                    <input value={vechicleno} onChange={(e) => setVechicleno(e.target.value)} className="input" type="text" placeholder="Vehicle No" required />
             

             
                </label>
                <label>
                    <input value={model} onChange={(e) => setModel(e.target.value)} className="input" type="text" placeholder="Vehicle Model" required />
                </label>
                <label>
                    <input value={color} onChange={(e) => setColor(e.target.value)} className="input" type="text" placeholder="Vehicle Color" required />
                </label>
                <label>
                    <input value={rgno} onChange={(e) => setRgno(e.target.value)} className="input" type="text" placeholder="Registration Number" required />
                </label>
                <button type="submit" className="submit">Update</button>
            </form>
        </div>
    );
}

export default EditCarForm;
