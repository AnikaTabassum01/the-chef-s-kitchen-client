import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const Register = () => {
    const { createUser, setUser, loading, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        } else {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createUser)
                    createdUser.displayName = name;
                    createdUser.photoUrl = photoUrl;
                    setUser(createdUser)
                    setLoading(false)
                    navigate(from, { replace: true })
                })
                .catch(error => {
                    const errorMessage = error.message;
                    if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                        setError('Account already exists. Please login')
                        setLoading(false)
                    }
                    console.log(errorMessage)
                })
        }
    }
    return (

        <>
            {
                loading && <Loader></Loader>
            }

            <Container className='px-4 py-2 my-4 mx-auto w-25 border border-secondary rounded'>
                <h3 className='my-4 text-center'>Please Register!</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photoUrl' placeholder="Enter Photo URL" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <p className='text-danger'>{error}</p>

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

        </>
    );
};

export default Register;