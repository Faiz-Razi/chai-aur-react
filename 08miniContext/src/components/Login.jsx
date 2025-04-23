import React, { useState, useContext } from 'react';

import UserContext from '../context/UserContext'; // Import the UserContext object

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext); // Use the UserContext to get the setUser function

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setUser({ username, password }); // Set the user in the context with the username and password
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            {' '}
            <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login; // Export the Login component for use in other components