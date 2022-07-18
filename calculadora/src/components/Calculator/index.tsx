import React, { Fragment } from "react";
import { ButtonsContainer } from "../ButtonsContainer";
import { Operations } from "../Operations";

export function Calculator() {
    return(
        <Fragment>
            <div className="calc">
                <h3>Calculadora</h3>
                <Operations />
                <ButtonsContainer />
            </div>
        </Fragment>
    );
}