// Code DelayedButton Component Here
 import React, {Component} from 'react';
export default class DelayedButton extends Component{
    handleClick = (e) => {
        e.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(e);
    }, this.props.delay);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Delay</button>
            </div>
        )
    }
}

// import React from 'react';

// class DelayedButton extends React.Component {
//   handleClick = event => {
//     event.persist();
//     window.setTimeout(() => {
//       this.props.onDelayedClick(event);
//     }, this.props.delay);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Delayed</button>;
//   }
// }

// export default DelayedButton;