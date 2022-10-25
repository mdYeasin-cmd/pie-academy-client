import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContextProvider';

const Faq = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <h2>This is FAQ page</h2>
            <h2>{user}</h2>
        </div>
    );
};

export default Faq;