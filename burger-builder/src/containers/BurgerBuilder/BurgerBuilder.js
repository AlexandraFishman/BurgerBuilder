import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad: 0.25,
    cheese : 0.5,
    meat: 0.8,

    bacon: 0.3
}

class BurgerBuilder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        }
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        const priceAddition = INGREDIENT_PRICE[type] + this.state.totalPrice;
        this.setState({ingredients: updatedIngredients,
            totalPrice: priceAddition});
    };

    removeIngredientHandler = (type) => {

    };


    render (){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingresientAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;