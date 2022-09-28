import React from 'react';

const UserDetails = ({user}) => {

    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.address.city}</p>
        </div>
    );
};

export default UserDetails;