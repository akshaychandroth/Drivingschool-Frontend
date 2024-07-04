// import React ,{ useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Editpackage() {
//   const[id,setId]=useState('')

//   const[type,setType]=useState()
//   const[packagename,setPackagename]=useState()
//   const[descripition,setDescription]=useState()
//   const[amount,setAmount]=useState()
//   const navigate = useNavigate()
//   const params = useParams();

//   const fetchPackage = async () => {
//     try {
//         const response = await axios.get(`http://localhost:8000/getapackage/${params.id}`);
//         const packdata = response.data;
//         setId(packdata.id);
//         setType(packdata.type);
//         setPackagename(packdata.packagename);
//         setDescription(packdata.descripition);
//         setAmount(packdata.amount);
//     } catch (error) {
//         console.error('Error fetching car:', error);
//         // Handle error
//     }
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const body = {
//           id,type,packagename, descripition,amount
//         };
//         const response = await axios.post('http://localhost:8000/update-package', body);
//         alert(response.data.message);
//         navigate('/listpackage')
        
//     } catch (error) {
//         console.error('Error updating package:', error);
//         // Handle error
//     }
// };

// useEffect(() => {
//     fetchPackage();
// }, [params.id]);






//   return (
//     <div>
//       <form onSubmit={handleSubmit}  class="form mt-5">
//         <p class="title">Add Vechicle</p>


        
//         <label>
//           <select  onChange={(e)=>setType(e.target.value)} class="input">
//           <option selected disabled  >
//               Vechicle Type
//             </option>
            
//             <option  class="input" value="car">
//               Car
//             </option>
           
//           </select>
//         </label>

//         <label>
//           <input  onChange={(e)=>setPackagename(e.target.value)} class="input" type="text" placeholder="" required="" />
//           <span>Package Name</span>
//         </label>

//         <label>
//           <input  onChange={(e)=>setDescription(e.target.value)} class="input" type="textarea" placeholder="" required="" />
//           <span>Description</span>
//         </label>

//         <label>
//           <input  onChange={(e)=>setAmount(e.target.value)} class="input" type="text" placeholder="" required="" />
//           <span>Amount</span>
//         </label>

       


       

//         <button class="submit">Add</button>
//       </form>
//     </div>
//   )
// }

// export default Editpackage



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Editpackage() {
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [packagename, setPackagename] = useState('');
  const [descripition, setDescripition] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  const fetchPackage = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/getapackage/${params.id}`);
      const packdata = response.data;
      setId(packdata.id);
      setType(packdata.type);
      setPackagename(packdata.packagename);
      setDescripition(packdata.descripition);
      setAmount(packdata.amount);
    } catch (error) {
      console.error('Error fetching package:', error);
      // Handle error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        id,
        type,
        packagename,
        descripition,
        amount
      };
      const response = await axios.post('http://localhost:8000/update-package', body);
      alert(response.data.message);
      navigate('/listpackage');
    } catch (error) {
      console.error('Error updating package:', error);
      // Handle error
    }
  };

  useEffect(() => {
    fetchPackage();
  }, [params.id]);

  return (
    <div>


      <Header/>
      <form onSubmit={handleSubmit} className="form mt-5">
        <p className="title">Edit Package</p>

        <label>
          <select onChange={(e) => setType(e.target.value)} className="input">
            <option disabled>Vechicle Type</option>
            <option value="car" selected={type === 'car'}>
              Car
            </option>
          </select>
        </label>

        <label>
          <input onChange={(e) => setPackagename(e.target.value)} className="input" type="text" value={packagename} placeholder="Package Name" required />
        </label>

        <label>
          <textarea onChange={(e) => setDescripition(e.target.value)} className="input" value={descripition} placeholder="Description" required />
        </label>

        <label>
          <input onChange={(e) => setAmount(e.target.value)} className="input" type="text" value={amount} placeholder="Amount" required />
        </label>

        <button className="submit">Update</button>
      </form>
    </div>
  );
}

export default Editpackage;
