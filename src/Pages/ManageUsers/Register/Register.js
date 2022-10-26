import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="form-container mx-auto shadow p-4 mt-5">
            <h3 className="login-title text-center mx-auto py-1 mb-3">Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="text-muted">

                </Form.Text>

                <div className="text-center">
                    <Button className="px-3 fw-semibold" variant="success" type="submit">
                        Register
                    </Button>
                </div>
            </Form>

            <div>
                <p className="text-center mt-3">
                    <small>Already have an account? <Link className="register-redirect" to="/login">Log In</Link></small>
                </p>
            </div>

        </div>
    );
};

export default Register;