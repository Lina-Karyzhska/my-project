import React, { Component } from 'react';

class Slide extends Component {
    constructor(props){
      super(props);
    }

    render() {
        const {Title, Plot, Genre, Actors, Poster, Ratings} = this.props.info;
        return (
            <div className="slider__item">
                <div className="slider__item_mask"></div>
                <div className="slider__item_description">
                    <h2>
                        {Title}
                    </h2>
                    <p>
                        {Plot}
                    </p>
                    <h3>Genres</h3>
                    <p>{Genre}</p>
                    <h3>Cast</h3>
                    <p>{Actors}</p>
                    <span>{Ratings}</span>
                </div>
                
                <img src={Poster} alt="poster"/>
            </div>
        )
    }
}

export default Slide;