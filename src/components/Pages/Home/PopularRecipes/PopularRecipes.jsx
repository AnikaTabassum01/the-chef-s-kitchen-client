import React from 'react';
import './PopularRecipe.css';
import { Col, Container, Row } from 'react-bootstrap';

const PopularRecipes = () => {
    return (
        <Container className='bg-light'> 
            <h1 className='text-center text-success'>Our Popular Recipes</h1>
            <Row md={6}>
               
                <div className='recipeName'>
                    <img className='recipe' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0HcMUIA_HVfPQMvZac8bvP0SRGESgDKnTg&usqp=CAU" alt="" />
                    <h4 className='recipeName1'>Strawberry Lassi</h4>
                </div>
                <div>
                    <img className='recipe' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5sAEJy0chXE5uWRtgGwbzbJwZ8LEwPonTg&usqp=CAU" alt="" />
                    <h4>Tiramisu</h4>
                </div>
                <div>
                    <img className='recipe' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02yNtiLTlM5-gTfInaBeLLqie1avytXK_Fw&usqp=CAU" alt="" />
                    <h4>Honey Chicken</h4>
                </div>
                <div>
                    <img className='recipe' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZshPy_Lq90qiurNEVRgj0B9ie43KIAYOLQ&usqp=CAU" alt="" />
                    <h4>Pizza Roll Ups</h4>
                </div>
                <div>
                    <img className='recipe' src="https://www.licious.in/blog/wp-content/uploads/2020/12/Fish-Salad-min-750x750.jpg" alt="" />
                    <h4 className='mb-5 pb-5'>Fish Salad</h4>
                </div>
               
                
            </Row>
    
        </Container>
    );
};

export default PopularRecipes;