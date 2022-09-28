import React from 'react';

const User = ({user, showUser}) => {
    return (
        <div>
            <h4>{user.id} -- {user.name}</h4>
            <button onClick={() => showUser(user)}>Click</button>
        </div>
    );
};

export default User;