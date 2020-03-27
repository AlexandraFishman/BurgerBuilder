import React, { Component } from "react";
import './popup.css';

const PopUp = (props) => {


    const ingredientsList = Object.keys(props.ingredients);
    const totalOrder = ingredientsList.map(key => (<li key={key}>{key} : {props.ingredients[key]}</li>));

    return (
        <div className="modal">
            <div className="modalContent">
                <span className="close" onClick={props.closePopup}>&times;</span>
                Your order consists of:
                <ul>{totalOrder}</ul>          
                <footer>
                    <button>Confirm order</button>
                    <button>Dismiss</button>
                </footer>
            </div>
        </div>
    );

}

export default PopUp;