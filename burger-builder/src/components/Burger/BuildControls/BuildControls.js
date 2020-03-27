import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' }
]

const buildControls = (props) => (
    <div className='BuildControls'>
        <p>Burger Price: <bold>{props.price}</bold></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={()=> props.ingresientAdded(ctrl.type)}
                remover={()=> props.ingredientRemover(ctrl.type)}
                disabled={props.disabled[ctrl.type]}></BuildControl>
        ))}
        <button onClick={() => props.orderButton()}>Order Now!</button>
    </div>
);

export default buildControls;