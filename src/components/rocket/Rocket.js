import React from 'react';

const Rocket = ({rocket}) => {
    return (
        <div>
            <h3> {rocket.flight_number} -- {rocket.mission_name}</h3>
            <img src={rocket.links.mission_patch_small} alt={rocket.mission_name}/>
        </div>
    );
};

export default Rocket;