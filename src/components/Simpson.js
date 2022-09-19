import React from 'react';

import {simpsons} from "./info";
function Simpson(props) {
    const {value}=props
    return (
        <div>
            <h3>{simpsons.name}--{simpsons.age}</h3>
            <p>{simpsons.surname}--{simpsons.info}</p>
            <img src={simpsons.photo} alt={simpsons.name}/>
        </div>
    );
}

export default Simpson;