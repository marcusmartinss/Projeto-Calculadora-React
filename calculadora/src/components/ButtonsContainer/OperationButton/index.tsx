import React, { Fragment } from 'react';

import '../../../App.css';

export function OperationButton(props: any) {

    return(
        <Fragment>
            <button className='operacao'>
                {props.operation}
            </button>
        </Fragment>
    );
}
