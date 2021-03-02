import '../../styles/dist/FilmList.css'
import React, { Component } from 'react';
import FilmCard from './FilmCard';
import Button from '../Button';

class FavFilms extends Component {
    constructor(props){
      super(props);
      this.isFetched = false;
      
      this.state = {
        favFilms: [],
        counter: 10,
        isShown: false,
      }
    }

    getSkeletons() {
      let skeletons = [];
      for (let i = 0; i < 10; i++) {
        skeletons.push(<FilmCard key={i} />)
      }
      return skeletons;
    }

    getFavFilms = () => {
        let films = [];

        for(let key in localStorage) {
            if (!localStorage.hasOwnProperty(key) || isNaN(key)) {
                continue;
            }

            films.push(JSON.parse(localStorage[key]));
        }

        this.isFetched = true;

        this.setState({
            favFilms: [...films]
        })
    }

    componentDidMount() {
      this.getFavFilms();
    }

    getCards = () => {
      let cards = [];
      for (let i = 0; i < this.state.counter; i++) {
        if (!this.state.favFilms[i]) break;
        const {id, Title, Year, Type, Ratings, Poster} = this.state.favFilms[i];
        cards.push(<FilmCard key={id} info={{Title, Year, Type, Ratings, Poster, id}} isFetched />)
      }
      return cards.length ? cards : <div className="filmlist__notFound">Not found</div>
    }

    increaseCounter = () => {
      this.setState({counter: this.state.counter + 10})
    }

    revertCounter = () => {
      this.setState({counter: 10})
    }

    areAllFilmsShown = () => {
      if (this.state.favFilms.length > 10) return this.state.counter >= this.state.favFilms.length;
    }

    toggleFavList = () => {
      this.setState({isShown: !this.state.isShown})
    }

     render() {
        return (
            <div className="section__wrapper">
              <div className="fav__btn">
                <Button handleClick={this.toggleFavList} inner={this.state.isShown ? 'Hide' : 'Show Favorite Films'}/>
              </div>

              { this.state.isShown ? 
                    <div className="filmlist">
                      {this.isFetched ? this.getCards() : this.getSkeletons()}
                    </div>
                : null }

              { this.areAllFilmsShown() ? <Button handleClick={this.revertCounter} inner='Hide'/> 
              : this.state.favFilms.length > 10 && <Button handleClick={this.increaseCounter} inner='More'/> }
            </div>
        )
    }
}

export default FavFilms;
