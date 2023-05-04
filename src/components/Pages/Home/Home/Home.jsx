import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import PopularRecipes from '../PopularRecipes/PopularRecipes';
import { AuthContext } from '../../../Provider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import SpecialCourses from '../SpecialCourses/SpecialCourses';

const Home = () => {
    const { loading } = useContext(AuthContext)

    return (
        <div>
            {
                loading ? <Loader></Loader> :
                    <>
                        <Banner></Banner>
                        <Chef></Chef>
                        <PopularRecipes></PopularRecipes>
                        <SpecialCourses></SpecialCourses>
                    </>
            }

        </div>
    );
};

export default Home;

