import React from 'react'
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
function Listpackage() {
    const [Package, setPackage] = useState([]);

    function fetchData(setPackage) {
        fetch('http://localhost:8000/listpackages')
          .then(res => res.json())
          .then(data => setPackage(data))
          .catch(err => console.log(err));
      }
      
    useEffect(() => {
      // fetch('http://localhost:8000/listcars')
      //   .then(res => res.json())
      //   .then(data => setCars(data))
      //   .catch(err => console.log(err));
  
      fetchData(setPackage);
    }, []);
    

    const handleDelete = async (id) => {
      try {
        const response = await axios.delete(`http://localhost:8000/delete-package/${id}`);
        alert(response.data.message);
        fetchData(setPackage)
        // Optionally, update the state to reflect the deletion
      } catch (error) {
        console.error('Error deleting Package:', error);
        alert('Failed to delete Package. Please try again later.');
      }
    };
    


  return (
    <div >
        <Header/>

      <div className='m-5'>

    

<Link to='/addpackage'>
        <button className='btn btn-success mb-4'>Add New Package</button>

        
        </Link>

<h3 className=" mb-4 text-success">Package List</h3>
      <table class="table table-hover">
        <thead>
          <tr  >
            <th scope='col'>Id</th>
            <th scope="col">Type</th>
            <th scope="col">Package Name</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>

        {Package.map(pack=> (
                        <tr >
                            <td>{pack.id}</td>
                            <td>{pack.type}</td>
                            <td>{pack.packagename}</td>
                            <td>{pack.descripition}</td>
                            <td>{pack.amount}</td>

                             <td>
                            <Link to={`edit/${pack.id}`}>

                              <button className='btn btn-primary'>Edit</button>
                    
                    </Link>

                    <button className='btn btn-danger m-2' onClick={() => handleDelete(pack.id)}>Delete</button>


                    </td> 

                      









                        </tr>
                    ))}
        </tbody>
      </table>


      </div>
     


    </div>
  )
}

export default Listpackage