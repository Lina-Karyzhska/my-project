import React, { Component } from 'react';
import Section from './sections/Section';

class Main extends Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
          <main>
            <Section isFirst={true}/>
            <Section title={this.props.title} isFirst={false}/>
          </main>
        )
    }
}

export default Main;