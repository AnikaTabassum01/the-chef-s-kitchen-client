import React from 'react';
import { Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefRecipe = () => {
    const data = useLoaderData();
    const { name, picture, yearsOfExperience, numberOfRecipes, likes, bio, recipes, photo } = data;
    return (
        <div className='bg-light'>
            <Col className=' p-4 text- d-flex'>
                <img className='image' src={picture} alt="" />
                 <div className='m-4'>
                 <h3 className='text-primary'>{name}</h3>
                <h5>Experience : {yearsOfExperience}</h5>
                <h5>Total Recipes : {numberOfRecipes}</h5>
                <h6>Total Likes : {likes}</h6>
                <h6>Bio :</h6>
                <p>{bio}</p>
                </div>
            </Col>

            {
                recipes.map(recipe => <Recipe
                    recipe={recipe}
                    key={recipe.id}
                ></Recipe>)
            }

        </div>
    );
};

export default ChefRecipe;