import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawr, Backdrop</div>
        <main className='bodyContent'>
            {props.children}
        </main>
    </Aux>
);

export default layout;