import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContextProvider';

const Blog = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2>This is blog page</h2>
            <p>{user?.email}</p>
        </div>
    );
};

export default Blog;