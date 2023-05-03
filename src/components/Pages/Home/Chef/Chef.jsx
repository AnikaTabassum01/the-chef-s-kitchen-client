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
       <Container className='p-4'>
        <Row className=''>
            {/* <h2>Chef....</h2> */}
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