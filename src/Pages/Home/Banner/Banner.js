import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg d-flex align-items-center">
            <div className="container h-100">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-white">
                            <div className="text-center">
                                <h1 className="banner-title mb-4">Computer Science & Engineering Courses Learning World</h1>
                                <p className="w-75 mx-auto banner-text">Here a lot of Computer Science & Engineering courses are abailable. You can choose as your needed one for develop your engineering skill. It will give you a lot of thrilling experiences.</p>
                                <div>
                                    <button className="banner-btn btn btn-success fw-semibold px-4 py-2 me-3">Our Courses</button>
                                    <button className="banner-btn btn btn-success fw-semibold px-4 py-2">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;