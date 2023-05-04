import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../components/Provider/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const { signInUser, loading, setLoading, githubSignInUser, googleSignInUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        setError('')
        if (password.length < 6) {
            setError('Password must be at least 6 character long')
            return;
        } else {
            signInUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    setLoading(false)
                    navigate(from, { replace: true })
                    console.log(loggedUser)
                
                })
                .catch(error => {
                    const errorMessage = error.message;
                    if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
                        setError('Password or Email invalid')
                        setLoading(false)
                    }
                    console.log(errorMessage)
                })
        }
    }

    const handleGoogleSignIn = () => {
        googleSignInUser()
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    const handleGithubLogin = () => {
        githubSignInUser()
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (

        <>      
        
            {
                loading && <Loader></Loader>
            }
            <Container className='py-2 my-4 w-25 border border-secondary rounded'>
                <h3 className='my-4 text-center'>Log In</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <p className='text-danger mt-3'>{error}</p>

                    <Button className='my-2' variant="primary" type="submit">
                        Log in
                    </Button>
                    <br />

                    <Form.Text>
                        Don't Have an Account? Please <Link to="/register">Register</Link>
                    </Form.Text>

                    <Form.Text className='text-success' >

                    </Form.Text>
                    <Button className='mx-2 mt-4 px-5 text-center' onClick={handleGoogleSignIn} variant="outline-primary"> <span className='pe-2'><FaGoogle></FaGoogle></span> Continue with Google</Button>
                    <Button className='mx-2 m-2 px-5' onClick={handleGithubLogin} variant="outline-primary"><span className='pe-2'><FaGithub></FaGithub></span>Continue with GitHub</Button>

                </Form>

            </Container>

        </>
    );
};

export default Login;