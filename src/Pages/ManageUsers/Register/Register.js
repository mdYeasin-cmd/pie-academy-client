import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContextProvider';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                navigate('/');
                handleUserPorfile({
                    displayName: name,
                    photoURL: photoURL
                });
            })
            .catch(error => toast.error(error));
    }

    const handleUserPorfile = (profileInfo) => {
        updateUserProfile(profileInfo)
        .then(() => {})
        .catch(error => toast.error(error));
    }

    return (
        <div className="form-container mx-auto shadow p-4 mt-5">
            <h3 className="login-title w-50 text-center mx-auto py-1 mb-3">Register</h3>
            <Form onSubmit={handleSubmit}>
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