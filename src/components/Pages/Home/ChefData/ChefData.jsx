import React from 'react';


const ChefData = ({cf}) => {
    
    
    const { id, name, picture, yearsOfExperience, numberOfRecipes, likes, bio, recipes } = cf;

    return (
       <div>
         <div>
                <h2 className='mb-5'>{name}</h2>
                <h3>Years of experience : <span >{yearsOfExperience} years</span></h3>
                <p >Number of Recipes : <span >{numberOfRecipes} recipes</span></p>
                <p  >Bio : <span>{bio}</span></p>
                <p>Likes : <span >{likes}</span></p>
                
            </div>
            {

            }
       </div>
    );
};

export default ChefData;