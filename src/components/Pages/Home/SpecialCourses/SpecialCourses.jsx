import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './SpecialCourses.css'

const SpecialCourses = () => {
    return (
        <Container className='bg-light'> 
        <h1 className='text-center text-success'>Available Courses...</h1>
        <Row md={4}>
           
            <div className='courseName'>
                <img className='recipe' src="https://i.ytimg.com/vi/Zbk_2_BAuqE/maxresdefault.jpg" alt="" />
                <h6>Special Snacks Items by-</h6>
                <h4 className='text-primary'>Vikas Khanna</h4>
                <h6 className='text-warning'>**01 Weeks Course</h6>
                <p>Course Fee: Inr 10000.</p>
                <Button className='px-5' variant="outline-success">Enroll Now</Button>
            </div>
            <div>
                <img className='recipe' src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/indian-dinner-recipes-swasthis.jpg" alt="" />
                <h6>Special Dinner Items by-</h6>
                <h4 className='text-primary'>Shipra Khanna</h4>
                <h6 className='text-warning'>**04 Weeks Course</h6>
                <p>Course Fee: Inr 25000.</p>
                <Button className='px-5' variant="outline-success">Enroll Now</Button>
            </div>
            <div>
                <img className='recipe' src="https://www.bostongirlbakes.com/wp-content/uploads/2020/11/IMG_0440.jpg" alt="" />
                <h6>Special Dessert Items by-</h6>
                <h4 className='text-primary'>Kunal Kapur</h4>
                <h6 className='text-warning'>**02 Weeks Course</h6>
                <p>Course Fee: Inr 15000.</p>
                <Button className='px-5 mb-5' variant="outline-success">Enroll Now</Button>
            </div>          
            
        </Row>

    </Container>
    );
};

export default SpecialCourses;