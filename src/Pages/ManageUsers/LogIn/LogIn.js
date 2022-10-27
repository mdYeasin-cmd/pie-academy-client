import React from 'react';
import './LogIn.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContextProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';


const LogIn = () => {

    const { providerLogIn, logIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            toast.success('Successfully Logged In your account!!!');
            navigate(from, {replace: true});
        })
        .catch(error => {
            toast.error(error.message);
        })

    }

    const handleSignInWithGoogle = () => {
        providerLogIn(googleProvider)
            .then(result => {
                toast.success('Successfully Logged In your account!!!')
                navigate(from, {replace: true});
            })
            .catch(error => toast.error(error.message));
    }

    const handleSignInWithGithub = () => {
        providerLogIn(githubProvider)
        .then(result => {
            toast.success('Successfully Logged In your account!!!');
            navigate(from, {replace: true});
        })
        .catch(error => toast.error(error.message));
    }

    return (
        <div className="form-container mx-auto shadow p-4 mt-5">
            <h3 className="login-title text-center w-50 mx-auto py-1 mb-3">Log In</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
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
                        Log In
                    </Button>
                </div>
            </Form>

            <div className="text-center mt-3">
                <span className="or-line fw-semibold">OR</span>
            </div>

            <div className="text-center mt-3">
                <button onClick={handleSignInWithGoogle} className="me-3 social-login-btn">
                    <FcGoogle></FcGoogle>
                </button>
                <button onClick={handleSignInWithGithub} className="social-login-btn">
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