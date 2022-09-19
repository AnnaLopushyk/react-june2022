import React from 'react';

import {simpsons} from "./info";
import Simpson from "./Simpson";

function Simpsons(props) {
    return (
        <div>
            {
                simpsons.map((value, index) => <Simpson key={index} simpon={simpsons}/>)
            }
        </div>
    );
}

export default Simpsons;