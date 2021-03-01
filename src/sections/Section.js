import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import AppSlider from './Slider/Slider';
import FilmList from './Films/FilmList';
import Profile from './Profile/Profile';

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
              {/* <Route exact path="/" component={ this.props.isFirst ? AppSlider : FilmList } /> */}
              <Route exact path="/"> 
                { this.props.isFirst ? <AppSlider /> : <FilmList title={this.props.title} /> }
              </Route>

              <Route exact path="/profile" component={ this.props.isFirst ? Profile : null } />
              <Redirect to="/" />
            </Switch>
          </div>
        )
    }
}

export default Section;