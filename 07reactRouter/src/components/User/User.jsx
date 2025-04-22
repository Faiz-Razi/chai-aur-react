
import React from 'react';

import { useParams } from 'react-router-dom';

function User() {
    const { kuchB } = useParams();
    return (

        <div>User: {kuchB}</div>
    );
}

export default User;