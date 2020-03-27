import React, { Component } from "react";
import './popup.css';

export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };

render() {
  return (
   <div className="modal">
     <div className="modalContent">
     <span className="close" onClick={this.handleClick}>&times;</span>
     <div>I'm A Pop Up!!!</div>
     <footer>
         <button>Confirm order</button>
         <button>Dismiss</button>
     </footer>
    </div>
   </div>
  );
 }
}