import React, { Fragment } from 'react';
import { EqualButton } from './EqualButton';
import { NumberButton } from './NumberButton';
import { OperationButton } from './OperationButton';

import '../../App.css';


export function ButtonsContainer() {

  return (
    <Fragment>
      <div className="buttons-container">

        <OperationButton operation='CE'/>
        <OperationButton operation='C'/>
        <OperationButton operation='DEL'/>
        <OperationButton operation='/'/>
        
        <NumberButton numero='7'/>
        <NumberButton numero='8'/>
        <NumberButton numero='9'/>
        <OperationButton operation='*'/>

        <NumberButton numero='4'/>
        <NumberButton numero='5'/>
        <NumberButton numero='6'/>
        <OperationButton operation='-'/>

        <NumberButton numero='1'/>
        <NumberButton numero='2'/>
        <NumberButton numero='3'/>
        <OperationButton operation='+'/>

        <NumberButton numero='0'/>
        <OperationButton operation='.'/>
        <EqualButton/>
      </div>
    </Fragment>
  );
}