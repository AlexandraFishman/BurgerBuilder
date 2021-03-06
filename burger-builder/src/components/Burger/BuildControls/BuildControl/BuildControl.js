import React from 'react';
import './BuildControl.css'


const buildControl = (props) => (
    <div className='BuildControl'>
        <div className='IngredientLabel'>{props.label}</div>
        <button className='Less' onClick={props.remover} disabled={props.disabled}>Less</button> 
        <button className='More' onClick={props.added}>More</button>
    </div>
);

export default buildControl;