import React, { useState } from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContextProvider';
import './Header.css';
import { CiLight, CiDark } from 'react-icons/ci';
import toast from 'react-hot-toast';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('Light');

    // Handle Light and Dark mode button
    const handleTheme = () => {
        if (theme === 'Light') {
            setTheme('Dark');
        }
        else {
            setTheme('Light');
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => toast.error(error.message));
    }

    return (
        <Navbar className="navbar-bg" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/">
                    <img className="logo-img" src='logo.png' alt="" />
                    <span className="brand-name fw-semibold">Pie Academy</span>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Link className="navigation-item" to="/home">Home</Link>
                        <Link className="navigation-item" to="/courses">Courses</Link>
                        <Link className="navigation-item" to="/faq">FAQ</Link>
                        <Link className="navigation-item" to="/blog">Blog</Link>
                        <button className="theme-btn" onClick={handleTheme}>
                            {
                                theme === 'Light' ?
                                    <CiLight />
                                    :
                                    <CiDark />
                            }
                        </button>
                        {
                            user && user.uid ?
                                <>
                                    <img
                                        className="account-img mx-3"
                                        src={user?.photoURL} alt=""
                                        title={user?.displayName}
                                    />
                                    <button className="btn btn-success fw-semibold" onClick={handleLogOut}>Log Out</button>
                                </>
                                :
                                <>
                                    <Link className="navigation-item" to="/login">Log In</Link>
                                    <Link className="navigation-item" to="/register">Register</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;