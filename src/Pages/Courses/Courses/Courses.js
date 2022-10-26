import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import CoursesList from '../CoursesList/CoursesList';
import './Courses.css';
import Row from 'react-bootstrap/Row';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className="mt-4 mb-5">
            <div className="row mx-0">
                <div className="col-lg-3 all-courses-container">
                    <h3 className="text-center w-75 mx-auto course-title mb-3 mt-2">Courses List</h3>
                    {
                        courses.map(course => <CoursesList
                            key={course.course_id}
                            course={course}
                        ></CoursesList>)
                    }
                </div>
                <div className="col-lg-9 courses-card-container">
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