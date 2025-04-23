import React, { useContext } from 'react';
import UserContext from '../context/UserContext'; // Import the UserContext object

function Profile() {

    const { user } = useContext(UserContext); // Use the UserContext to get the user object

    if (!user) return <div>Please login</div>; // If the user is not logged in, show a message

    return <div>Welcome {user.username}</div>
}

export default Profile; // Export the Profile component for use in other components