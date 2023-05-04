import React, { useState } from 'react';
import { toast } from 'react-toastify';



const Recipe = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisable = () => {
        toast(` You have added "${recipe.name}" in your favourite recipe.`)
        setIsDisabled(!isDisabled);
    };
    return (
        <div className='d-flex  pt-2  border border-info  bg-light'> 
            <img className='h-50 w-50 pe-4 ms-4 my-2 food' src={recipe.photo} alt="" />
            <div>
            <h3 className='text-success py-2'>{recipe.name}</h3>
            <h6>{recipe.ingredients.join(', ')}</h6>
            <h6>{recipe.cooking_method}</h6>
            <button className='mb-4' disabled={isDisabled} onClick={handleDisable} variant="warning">Favorite</button>
            
            </div>
        </div>



    );
};

export default Recipe;