import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import './ChefCard.css';
import { Link } from 'react-router-dom';

const ChefCard = ({ cf }) => {
    const { id, name, picture, yearsOfExperience, numberOfRecipes, likes } = cf;
    console.log(cf);

    return (
       
        <Col className=' p-4 ps-5 rounded' md={4}>
            <img className='image mx-auto' src={picture} alt="" />
            <h3 className='text-primary'>{name}</h3>
            <h5>Experience : {yearsOfExperience}</h5>
            <h5>Total Recipes : {numberOfRecipes}</h5>
            <h6>Total Likes : {likes}</h6>
            <Link to={`/chefRecipe/${id}`}><Button variant="secondary">View Recipes</Button></Link>
        </Col>
      
    );
};

export default ChefCard;