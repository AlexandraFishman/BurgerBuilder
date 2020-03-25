import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import '../../assets/burger-king_tomato-king.jpg';

const layout = (props) => (
    <Aux>
        <img src="burger-king_tomato-king.jpg"/>
        <div>Toolbar, Sidedrawr, Backdrop</div>
        <main className='bodyContent'>
            {props.children}
        </main>
    </Aux>
);

export default layout;