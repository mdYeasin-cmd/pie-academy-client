import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {

    const courseInfo = useLoaderData();
    console.log(courseInfo);
    const { course_name, course_price, image, instructor, description, course_level, course_duration, categories, course_curriculum } = courseInfo;

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 mt-4">
                    <div className="d-flex align-items-center">
                        <h2 className="text-center w-50 mx-auto rounded py-2 px-2 course-title">{course_name}</h2>
                        <button className="btn btn-success fw-semibold download-btn">Download</button>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                        <div>
                            Instructor: <span className="fw-semibold">{instructor}</span>
                        </div>
                        <div>
                            Course Level: <span className="fw-semibold">{course_level}</span>
                        </div>
                        <div>
                            Course Duration: <span className="fw-semibold">{course_duration}</span>
                        </div>
                    </div>
                    <div>
                        <h5>Categories</h5>
                        <p className="text-capitalize fs-6">{categories} Course</p>
                    </div>
                    <div>
                        <h5>Description</h5>
                        <p>{description}</p>
                    </div>
                    <div>
                        <h5>Course Curriculum</h5>
                        <div>
                            {
                                course_curriculum.map(curriculumList => <li
                                    className=""
                                >
                                    {curriculumList}
                                </li>)
                            }
                        </div>

                    </div>
                    <div className="mt-4 mb-5 text-center">
                        <Button variant="success fs-5">Get Premium Access</Button>
                    </div>
                </div>
                <div className="col-lg-3 mt-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title className="fs-1 mb-3">${course_price}</Card.Title>
                            <Button variant="success fs-5">Get Premium Access</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;