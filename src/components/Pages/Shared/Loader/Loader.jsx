import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='text-center'>
            <Spinner className='m-5 p-5' animation="border" />
        </div>
    );
};

export default Loader;