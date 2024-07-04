import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function SelectedPackages() {
  const [selectedPackages, setSelectedPackages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSelectedPackages = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/${id}/selected-packages`);
        setSelectedPackages(response.data);
      } catch (error) {
        console.error('Error fetching selected packages:', error);
      }
    };

    fetchSelectedPackages();
  }, [id]);

  return (
    <div className='m-5'>


        

        
      <h2 className='text-success ms-3'>Selected Packages</h2>
      <Row className='mt-5'>
        {selectedPackages.map(pack => (
          <Col  md={4}>
            <Card className='text-white bg-dark m-5' style={{ width: '25rem' }}>
              <Card.Header>Package Name: {pack.packagename}</Card.Header>
              <Card.Body>
                <Card.Title>Price: {pack.amount}</Card.Title>
                <Card.Text>{pack.description}</Card.Text>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SelectedPackages;
