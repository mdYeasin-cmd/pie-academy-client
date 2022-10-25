import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const [theme, setTheme] = useState('Light');
    
    // Handle Light and Dark mode button
    const handleTheme = () => {
        if(theme === 'Light'){
            setTheme('Dark');
        }
        else{
            setTheme('Light');
        }
    }

    return (
        <Navbar className="navbar-bg" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img className="logo-img" src='logo.png' alt=""/>
                    <span className="brand-name fw-semibold">Pie Academy</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="navigation-item" to="/home">Home</Link>
                        <Link className="navigation-item" to="/courses">Courses</Link>
                        <Link className="navigation-item" to="/faq">FAQ</Link>
                        <Link className="navigation-item" to="/blog">Blog</Link>
                        <Button onClick={handleTheme}>{theme}</Button>
                        <Link className="navigation-item" to="/login">Log In</Link>
                        <Link className="navigation-item" to="/register">Register</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;