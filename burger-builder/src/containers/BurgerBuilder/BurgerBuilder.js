import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 10,
                meat: 12
            }
        }
    }


    render (){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control to add and  remove ingredients</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;