import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import burgerLogo from '../../assets/burger-king_tomato-king.jpg';

const layout = (props) => (
    <Aux>
        <div className="HeaderWraper">
            <img src={burgerLogo} alt="Burger Logo" width="150px" height="100px" />
            <div className="Toolbar">Toolbar, Sidedrawr, Backdrop</div>
        </div>
        <main className='bodyContent'>
            {props.children}
        </main>
    </Aux>
);

export default layout;