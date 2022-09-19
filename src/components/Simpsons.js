import React from 'react';

import {simpsons} from "./info";
import Simpson from "./Simpson";

function Simpsons(props) {
    return (
        <div>
            {
                simpsons.map((simpson, index) => <Simpson key={index} simpson={simpson}/>)

            }
        </div>
    );
}

export default Simpsons;