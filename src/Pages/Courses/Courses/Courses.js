import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import CoursesList from '../CoursesList/CoursesList';
import './Courses.css';
import Row from 'react-bootstrap/Row';

const Courses = () => {

    const courses = useLoaderData();
    console.log(courses);

    

    return (
        <div className="mt-4 mb-5">
            <div className="row mx-0">
                <div className="col-lg-3 all-courses-container">
                    {
                        courses.map(course => <CoursesList
                            key={course.course_id}
                            course={course}
                        ></CoursesList>)
                    }
                </div>
                <div className="col-lg-9 border-success">
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <CourseCard
                            key={course.course_id}
                            course={course}
                        >
                        </CourseCard>)
                    }
                </Row>
                </div>
            </div>


        </div>
    );
};

export default Courses;