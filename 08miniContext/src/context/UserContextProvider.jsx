import React from "react";

import UserContext from "./UserContext"; // Import the UserContext object

const UserContextProvider = ({ children }) => {

    const [user, setUser] = React.useState(null);

    return (
        <>
            <UserContext.Provider value={{ user, setUser }} >
                {children}
            </UserContext.Provider>

        </>
    )

}

export default UserContextProvider; // Export the UserContextProvider component for use in other components