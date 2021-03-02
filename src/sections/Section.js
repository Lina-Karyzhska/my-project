import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import AppSlider from './Slider/Slider';
import FilmList from './Films/FilmList';
import Profile from './Profile/Profile';
import FavFilms from './Films/FavFilms';

class Section extends Component {
    constructor(props){
      super(props);
    }

    render() {
        let sectClassName = "section section_";
        this.props.isFirst ? sectClassName += "first" : sectClassName += "second";
        return (
          <div className={sectClassName}>
            <Switch>
              <Route exact path="/"> 
                { this.props.isFirst ? <AppSlider /> : <FilmList title={this.props.title} /> }
              </Route>

              { localStorage.isAuthenticated == "true" && <Route exact path="/profile" component={ this.props.isFirst ? Profile : FavFilms } /> }

              <Redirect to="/" />
            </Switch>
          </div>
        )
    }
}

export default Section;