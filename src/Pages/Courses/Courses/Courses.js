import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContextProvider';

const Courses = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2>This is courses page</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default Courses;