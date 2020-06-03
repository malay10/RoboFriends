import React, {Component} from 'react';
import './Hello.css';

const Hello = (props) => {
    return (
        <div className="tc f1">
            <h1>Hello World</h1>
            <p>Welcome to React, {props.greetings} </p>
            </div>
    );
}

// class Hello extends Component{
//     render(){
//         return (
//         <div className="tc f1">
//             <h1>Hello World</h1>
//             <p>Welcome to React, {this.props.greetings} </p>
//             </div>
//         );
//     }
// }

export default Hello;