import React, { Fragment } from "react";

import '../../../App.css';

export function NumberButton(props: any) {
    return (
        <Fragment>
            <button className='number'>{props.numero}</button>
        </Fragment>
    );
}