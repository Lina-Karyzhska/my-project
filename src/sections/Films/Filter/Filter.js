import '../../../styles/dist/Filter.css';
import React, { Component } from 'react';
import RangeSlider from './RangeSlider';
import Checkbox from './Checkbox';
import Genres from './DropdownGenres';
import Sort from './DropdownSort';

class Filter extends Component {
    constructor(props){
        super(props);

        this.filters = {
          isMovie: false,
          isTV: false,
          genre: "",
          years: [1940, 2021],
          sort: "",
          title: "",
        }
    }

    setFilters = (filter, value) => {
        this.filters[filter] = value;
        this.props.getFilters(this.filters);
    }

    componentDidUpdate() {
        if (this.filters.title != this.props.title) {
            this.filters.title = this.props.title;
            this.props.getFilters(this.filters);
        }
    }

    render() {
        return (
            <form className="filter">
                <div className="filter__params">
                    <div className="filter__types">
                        <Checkbox setFilter={this.setFilters} name="TV"/>
                        <Checkbox setFilter={this.setFilters} name="Movie"/>
                    </div>


                    <div className="filter__dropdown filter__dropdown_genres">
                        <Genres setFilter={this.setFilters}/>
                    </div>

                    <div className="filter__slider">
                        <span>Age</span>
                        <RangeSlider setFilter={this.setFilters}/>
                    </div>
                </div> 

                <div className="filter__dropdown_sort">
                    <span>Sort by:</span>
                    <Sort setFilter={this.setFilters}/>
                </div>                 
            </form>
        )
    }
}

export default Filter;
