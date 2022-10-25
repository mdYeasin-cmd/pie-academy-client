import React from 'react';
import './LogIn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


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

            <div className="text-center mt-3">
                <button className="me-3 social-login-btn">
                    <FcGoogle></FcGoogle>
                </button>
                <button className="social-login-btn">
                    <FaGithub></FaGithub>
                </button>
            </div>

            <div>
                <p className="text-center mt-3">
                    <small>Don't have an account? <Link className="register-redirect" to="/register">Register</Link></small>
                </p>
            </div>

        </div>
    );
};

export default LogIn;