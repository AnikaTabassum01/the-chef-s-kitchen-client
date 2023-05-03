import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';


const Recipe = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisable = () => {
        Toast(`"${recipe.name}" is your favorite recipe`)
        setIsDisabled(!isDisabled);
    };
    return (
        <div className='d-flex p-4 m-4 border border-info bg-light'> 
            <h3 className='text-success px-4'>{recipe.name}</h3>
            <div>
            <h6>{recipe.ingredients.join(', ')}</h6>
            <h6>{recipe.cooking_method}</h6>
            <button disabled={isDisabled} onClick={handleDisable} variant="warning">Favorite</button>
            </div>
        </div>



    );
};

export default Recipe;