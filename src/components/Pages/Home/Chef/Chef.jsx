import React, { useEffect, useState } from 'react';
import ChefData from '../ChefData/ChefData';

const Chef = () => {
    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => setChef(data))

    }, [])
    return (
        <div>
            {
                chef.map(cf => <ChefData
                cf={cf}
                key={cf.id}
                ></ChefData>)
            }
        </div>
    );
};

export default Chef;