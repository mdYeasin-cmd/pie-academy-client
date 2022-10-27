import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactToPdf from 'react-to-pdf';

const CourseDetails = () => {

    const courseInfo = useLoaderData();
    const { course_id, course_name, course_price, image, instructor, description, course_level, course_duration, categories, course_curriculum } = courseInfo;
    const ref = React.createRef();
    const options = {
        orientation: 'p',
        unit: 'in',
        format: [9, 11]
    };

    return (
        <div className="container">
            <div className="row" ref={ref}>
                <div className="col-lg-9 mt-4">
                    <div className="d-flex align-items-center">
                        <h2 className="text-center w-50 mx-auto rounded py-2 px-2 course-title">{course_name}</h2>
                        <ReactToPdf targetRef={ref} filename="course-curriculum.pdf" options={options}>
                            {({ toPdf }) => (
                                <button
                                    className="btn btn-success fw-semibold download-btn"
                                    onClick={toPdf}
                                >Download</button>
                            )}
                        </ReactToPdf>
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
                                course_curriculum.map((curriculumList, idx) => <li
                                    key={idx}
                                >
                                    {curriculumList}
                                </li>)
                            }
                        </div>

                    </div>
                    <div className="mt-4 mb-5 text-center">
                        <Link to={`/checkout/${course_id}`}>
                            <Button variant="success fs-5">Get Premium Access</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-3 mt-5">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title className="fs-1 mb-3">${course_price}</Card.Title>
                            <Link to={`/checkout/${course_id}`}>
                                <Button variant="success fs-5">Get Premium Access</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;