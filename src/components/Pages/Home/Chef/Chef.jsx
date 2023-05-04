import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { Container, Row } from 'react-bootstrap';

const Chef = () => {

    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipe')
        .then(res => res.json())
        .then(data => setChef(data))
    }, [])

    return (
       <Container className='p-4 bg-light'>

        <h1 className='text-center text-success py-4'>Our All Famous Chef at a Glance....</h1>
        <Row className=''>
            
            {
                chef.map(cf => <ChefCard
                cf={cf}
                key={cf.id}
                ></ChefCard>)
            }

        </Row>
       </Container>
    );
};

export default Chef;