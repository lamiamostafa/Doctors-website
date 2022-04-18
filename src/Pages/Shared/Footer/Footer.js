import React from 'react';
import { Form } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-black text-white'>
            <div className='container w-50 mx-auto'>
                <Form >
                    <Form.Group className="mb-2 pt-2" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="ContactNo" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Your Message" />
                    </Form.Group>
                </Form>
            </div>
            <p ><small>copyright &copy; {year} Lamia Mostafa </small></p>
        </footer>
    );
};

export default Footer;