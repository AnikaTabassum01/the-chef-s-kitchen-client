import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../components/Provider/AuthProvider';

const Login = () => {
    const {signInUser, loading, setLoading, githubSignInUser, googleSignInUser, setUser} = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            setLoading(false)
            navigate(from, {replace: true})
            console.log(loggedUser)
        })
        .catch(error =>{
            const errorMessage = error.message;
            if(errorMessage === 'Firebase: Error (auth/wrong-password).'){
                setError('Password or Email invalid')
                setLoading(false)
            }
            console.log(errorMessage)
        })
    }

    const handleGoogleSignIn = () =>{
        googleSignInUser()
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser)
            setLoading(false)
            navigate(from, {replace: true})
        })
        .catch(error =>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    const handleGithubLogin = () =>{
        githubSignInUser()
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser)
            setLoading(false)
            navigate(from, {replace: true})
        })
        .catch(error =>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }




    return (

        
        <Container className='py-2 my-4 w-25 border border-secondary rounded'>
            <h3 className='my-4 text-center'>Log In</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='my-2' variant="primary" type="submit">
                    Submit
                </Button>
                <br />

                <Form.Text>
                Don't Have an Account? Please <Link to="/register">Register</Link>
                </Form.Text>

                <Form.Text className='text-success' >

                </Form.Text>
                <Button className='mx-4 mt-4 px-5 text-center' onClick={handleGoogleSignIn}variant="outline-primary">Continue with Google</Button>
                <Button className='mx-4 m-2 px-5' onClick={handleGithubLogin}variant="outline-primary">Continue with GitHub</Button>

            </Form>

        </Container>
    );
};

export default Login;