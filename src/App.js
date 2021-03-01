import './styles/dist/App.css';
import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: "",
      }
    }

    getTitle = (title) => {
      this.setState({title: title});
    }

    render() {
        return (
          <>
            <Header handleChange={this.getTitle}/>
            <Main title={this.state.title}/>
          </>
        )
    }
}

export default App;