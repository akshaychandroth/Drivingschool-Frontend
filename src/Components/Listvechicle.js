import React from 'react'
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function Listvechicle() {
    const [cars, setCars] = useState([]);


    function fetchData(setCars) {
      fetch('http://localhost:8000/listcars')
        .then(res => res.json())
        .then(data => setCars(data))
        .catch(err => console.log(err));
    }
    
  useEffect(() => {
    // fetch('http://localhost:8000/listcars')
    //   .then(res => res.json())
    //   .then(data => setCars(data))
    //   .catch(err => console.log(err));

    fetchData(setCars);
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/delete-car/${id}`);
      alert(response.data.message);
      fetchData(setCars)
      // Optionally, update the state to reflect the deletion
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Failed to delete car. Please try again later.');
    }
  };
  

  return (
    <div className=''>
          <Header/>

<div className='m-5'>
<Link to='/addvechicle'>
        <button className='btn btn-success mb-4'>Add New Car</button>

        
        </Link>

<h3 className=" mb-4 text-success">Car List</h3>
      <table class="table table-hover">
        <thead>
          <tr  >
            <th scope='col'>Id</th>
            <th scope="col">Type</th>
            <th scope="col">Vechicle No</th>
            <th scope="col">Model</th>
            <th scope="col">Reg No</th>
            <th scope="col">Color</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>

        {cars.map(car=> (
                        <tr >
                            <td>{car.id}</td>
                            <td>{car.type}</td>
                            <td>{car.vechicleno}</td>
                            <td>{car.model}</td>
                            <td>{car.rgno}</td>
                            <td>{car.color}</td>

                            <td>
                            <Link to={`edit/${car.id}`}>

                              <button className='btn btn-primary'>Edit</button>
                    
                    </Link>

                    <button className='btn btn-danger m-2' onClick={() => handleDelete(car.id)}>Delete</button>


                    </td>

                      









                        </tr>
                    ))}
        </tbody>
      </table>


      </div>
     


    </div>
  )
}

export default Listvechicle


// {cars.map(car => (
//     <li key={car._id}>
//       Type: {car.type}, Vehicle No: {car.vechicleno}, Model: {car.model}, Color: {car.color}, RG No: {car.rgno}
//     </li>
//   ))}