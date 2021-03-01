import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
          <button onClick={this.props.handleClick} className="button">{this.props.inner}</button>
        )
    }
}

export default Button;