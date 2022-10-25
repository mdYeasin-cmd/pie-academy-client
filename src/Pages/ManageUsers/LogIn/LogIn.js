import React from 'react';
import './LogIn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LogIn = () => {
    return (
        <div className="form-container mx-auto shadow p-4 mt-5">
            <h3 className="login-title text-center mx-auto py-1 mb-3">Log In</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="text-muted">

                </Form.Text>

                <div className="text-center">
                    <Button className="px-3 fw-semibold" variant="success" type="submit">
                        Log In
                    </Button>
                </div>
            </Form>

            <div className="text-center mt-3">
                <span className="or-line fw-semibold">OR</span>
            </div>

        </div>
    );
};

export default LogIn;