import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { html2pdf } from 'html2pdf.js';

const Blog = () => {

    const downloadAsPdf = () => {
        const element = document.getElementById('blog');
        const options = {
            margin: 0.5,
            filename: 'blog.pdf',
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().set(options).from(element).save();
    }

    return (

        <Container>

            <Button className='mt-4' onClick={downloadAsPdf} variant="outline-success">Download</Button>

            <h2 className='text-center pt-4 text-primary'>Questions and Answers</h2>
            <div className='border border-green rounded p-4 bg-light my-4'>
                <h5> <span className='text-danger'>  Question-1 : </span> Tell us the differences between uncontrolled and controlled components.</h5>
                <p><span className='text-success'>Answer : </span> React supports two types of components: controlled components and uncontrolled components.
                    <br />
                    In a controlled component, the form data is handled by the state within the component. The state within the component serves as “the single source of truth” for the input elements that are rendered by the component.
                    <br />
                    Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. Instead of writing an event handler for all of your state updates, you use a ref to retrieve values from the DOM.
                </p>
            </div>
            <div className='border border-green rounded p-4 bg-light my-4'>
                <h5><span className='text-danger'>Question-2 : </span> How to validate React props using PropTypes?</h5>
                <p><span className='text-success'>Answer : </span>
                    Props and PropTypes are important mechanisms for passing read-only attributes between React components.
                    PropTypes is Reacts internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking.
                </p>
            </div>
            <div className='border border-green rounded p-4 bg-light my-4'>
                <h5><span className='text-danger'>Question-3 :  </span> Tell us the difference between nodejs and express js.</h5>
                <p><span className='text-success'>Answer : </span>  Node.js and Express.js are both frameworks used for     developing web applications with JavaScript, but they serve different purposes.
                    <br />
                    Node.js is a runtime environment for executing JavaScript on the server-side, while Express.js is a web framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. We can use Node.js to build any kind of server-side application, while Express.js is specifically designed for building web applications and APIs.
                </p>
            </div>
            <div className='border border-green rounded p-4 bg-light my-4'>
                <h5><span className='text-danger'>Question-4 : </span> What is a custom hook, and why will you create a custom hook?</h5>
                <p><span className='text-success'>Answer : </span>
                    A custom hook is a function in React that allows us to reuse stateful logic between components, making it easier to create reusable and composable code. It's a way to extract and reuse common code that manages stateful logic and side effects, by leveraging existing React hooks.Its very important that we use in time of need.

                    <br />

                    I will create a custom hook for tasting and share components. Creating a custom hook in React can help me to improve reusability, organization, abstraction, and testing of my code. It allow me to encapsulate complex logic and state management into a reusable function, which can be easily shared across components and projects.
                </p>
            </div>

        </Container>
    );
};

export default Blog;