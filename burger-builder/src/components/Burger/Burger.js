import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ingredientsAsArray = Object.keys(props.ingredients) //turns the keys of the object into an array
        .map(ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map((_,i) => 
                <BurgerIngredient key={ingrKey + i} type={ingrKey}/>);
        }).reduce((arr,el) => {
            return arr.concat(el);
        },[]);

        console.log(ingredientsAsArray);
        if(ingredientsAsArray.length === 0){
            ingredientsAsArray = <p>Please start adding  ingredients...</p>
        }


    
    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {ingredientsAsArray}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;