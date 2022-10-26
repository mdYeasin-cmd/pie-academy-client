import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesList.css';

const CoursesList = ({ course }) => {

    const { course_name, course_id } = course;

    return (
        <div className="courses-list-container">
            
            <Link className="courses-name fw-semibold bg-success text-white py-2 rounded px-2" to={`/courseDetails/${course_id}`}>{course_name}</Link>

        </div>
    );
};

export default CoursesList;