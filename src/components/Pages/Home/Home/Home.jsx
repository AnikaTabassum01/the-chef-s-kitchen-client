import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import PopularRecipes from '../PopularRecipes/PopularRecipes';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Chef></Chef>
           <PopularRecipes></PopularRecipes>
           
        </div>
    );
};

export default Home;