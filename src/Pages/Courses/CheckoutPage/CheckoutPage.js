import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CheckoutPage = () => {

    const course = useLoaderData();
    console.log(course)
    const {course_name, course_price, course_duration, image} = course;

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mx-auto">
                    <Card className="mx-auto mt-5 text-center">
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{course_name}</Card.Title>
                            <div className="my-4">
                                <div >Course Price: <span className="fw-semibold">${course_price}</span></div>
                                <div >Course Duration: <span className="fw-semibold">{course_duration}</span></div>
                            </div>
                            <Button className="fw-semibold px-3 w-100 fs-5" variant="success">Payment</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;