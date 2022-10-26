import React from 'react';
import './CoursesList.css';

const CoursesList = ({ course }) => {

    return (
        <div className="courses-list-container">
            <h4 className="courses-name bg-success text-white py-2 rounded px-2">{course.course_name}</h4>
        </div>
    );
};

export default CoursesList;