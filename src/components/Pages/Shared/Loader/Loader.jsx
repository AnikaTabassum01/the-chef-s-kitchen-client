import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner className='m-5 p-5' animation="border" />
    );
};

export default Loader;