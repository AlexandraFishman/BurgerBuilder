import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const ingredientsAsArray = Object.keys(props.ingredients) //turns the keys of the object into an array
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map((_,i) => 
                <BurgerIngredient key={ingrKey + i} type={ingrKey}/>);
        });

    
    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {ingredientsAsArray}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;