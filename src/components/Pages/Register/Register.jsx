import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='px-4 py-2 my-4 mx-auto w-25 border border-secondary rounded'>
            <h3 className='my-4 text-center'>Please Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms & Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />

                <Form.Text>
                Already Have an Account? Please <Link to="/login">Log in</Link>
                </Form.Text>

                <Form.Text className='text-success' >

                </Form.Text>

            </Form>

        </Container>
    );
};

export default Register;