import './styles/dist/App.css';
import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: "",
        isAuthenticated: false
      }
    }

    getTitle = (title) => {
      this.setState({title: title});
    }

    registration = (bool) => {
      this.setState({isAuthenticated: bool});
    }

    render() {
        return (
          <>
            <Header handleAuth={this.registration} handleChange={this.getTitle}/>
            <Main title={this.state.title}/>
          </>
        )
    }
}

export default App;