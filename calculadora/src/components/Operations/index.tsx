import React, { Fragment } from "react";

import '../../App.css';

export function Operations() {
    return(
        <Fragment>
            <div className="operations">
                <div className="previous-operation"></div>
                <div className="current-operation"></div>
            </div>
        </Fragment>
    )
}