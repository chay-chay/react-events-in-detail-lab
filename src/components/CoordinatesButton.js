

// Code CoordinatesButton Component Here
import React, {Component} from 'react';
export default class CoordinatesButton extends Component{
    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

// import React from 'react';

// class CoordinatesButton extends React.Component {
//   handleClick = event => {
//     this.props.onReceiveCoordinates([event.clientX, event.clientY]);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Coords</button>;
//   }
// }

// export default CoordinatesButton;