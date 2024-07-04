


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

function Packagestd() {
  const [packages, setPackages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:8000/listpackages');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  const handleSelectPackage = async (packageId) => {
    try {
      const response = await axios.post(`http://localhost:8000/${id}/select-package`, { packageId });
      if (response.status === 200) {
        alert(response.data.message);
        // Refresh packages after successful selection
        const updatedPackages = await axios.get('http://localhost:8000/listpackages');
        setPackages(updatedPackages.data);
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert('Package is already selected');
      } else {
        console.error('Error selecting package:', error);
      }
    }
  };

  return (
    <div className='m-5'>



      <h3 className='text-success ms-5 mt-2'>All Packages</h3>

      <Row className='mt-5'>
        {packages.map(pack => (
          <Col key={pack._id} md={4}>
            <Card className='text-white bg-dark m-5' style={{ width: '25rem' }}>
              <Card.Header>Package Name: {pack.packagename}</Card.Header>
              <Card.Body>
                <Card.Title>Price: {pack.amount}</Card.Title>
                <Card.Text>{pack.description}</Card.Text>
                <Button
                  onClick={() => handleSelectPackage(pack._id)}
                  disabled={pack.isSelected} // Disable button if package is already selected
                  className='btn btn-success'
                >
                  {pack.isSelected ? 'Selected' : 'Select'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Packagestd;
