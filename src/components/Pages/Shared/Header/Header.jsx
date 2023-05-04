import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
   

    const handleSignOut = () => {
        signOutUser()
            .then(() => {

            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

  return (

        <nav className='d-flex bg-dark'>
          <div className='mx-5 pt-4 text-white'>
            <h1>The Chef's Kitchen</h1>
          </div>
          <div className='d-flex mx-auto px-5 pt-4'>
            <Link to='/'><h5 className='px-4 my-2'>Home</h5></Link>
            <Link to='/blog'><h5 className='px-4 my-2'>Blog</h5></Link>

            { user ?
              <Button className='my-2 ms-5' onClick={handleSignOut} variant="info">Sign out</Button>

              : <Link to='/login'><Button className='mx-2 my-2' variant="info">Login</Button></Link>
            }
          </div>
        </nav>





    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">The Chef's Kitchen</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className=" mx-auto">
    //         <Link className='px-4' to='/'>Home</Link>
    //         <Link to='/blog'>Blog</Link> 
    //       </Nav>
         
         
    //       <Nav>

    //       user ? <Button onClick={handleSignOut} variant="info">Sign out</Button>
          

    //       : <Link to='/login'><Button variant="info">Login</Button></Link>

    //       </Nav>
          
       
       
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

  );
};

export default Header;