import '../../styles/dist/FilmCard.css'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Star from './Star';

const useStyles = makeStyles((theme) => ({
  card: {
  width: "100%",

  "& .MuiPaper-root": {
    margin: 0,
    marginLeft: 0,
  }
  },
  media: {
    height: 300,
  },
}));

function Film(props) {
  const loading = props.isFetched;
  let favBtnClass = "card__favbtn card__desc";

  if (props.isFav) {
    favBtnClass += " card__favbtn_isFav";
  }

  let info;
  if (props.info) {
    info = props.info;
  }

  const classes = useStyles();

  const toggleFav = (event) => {
    if (event.currentTarget.disabled) return
    props.setFav(event)
  }

  return (
    <Card className={classes.card}>
      {loading ? (
        <div className="card__img_wrapper">
          <img src={info.Poster} alt="poster" className="card__img"/>
        </div>
      ) : (
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <h4>{info.Title}</h4>
            <p>
              <span className="card__desc">{info.Year}</span>
              <span className="card__desc">{info.Type}</span>
            </p>
            <div>
              <span  className="card__desc">{info.Ratings}</span>
              {localStorage.isAuthenticated == "true" ? 
                <Tooltip title="Add to favorite" placement="right" TransitionComponent={Zoom} enterDelay={500}><span>
                  <button data-isfav={props.isFav} onClick={(event) => toggleFav(event)} className={favBtnClass}>
                    <Star />
                  </button></span>
                </Tooltip>
              : null}
             
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Skeleton animation="wave" height={10} width="70%" style={{ margin: "auto", marginBottom: "5px" }} />
            <Skeleton animation="wave" height={10} width="50%" style={{ margin: "auto", marginBottom: "5px"}}/>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <Skeleton animation="wave" height={10} width="15%" style={{margin: "0 5px"}}/>
            <Skeleton animation="wave" height={10} width="15%" style={{margin: "0 5px"}}/>
            </div>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
}

Film.propTypes = {
  loading: PropTypes.bool,
};

class FilmCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
    }
  }

  setFav = (event) => {
    this.setState({isFav: !this.state.isFav})

    if (event.currentTarget.dataset.isfav == "false") {
      localStorage[this.info.id] = JSON.stringify({...this.info, ...this.state});
      event.currentTarget.dataset.isfav = "true";
    } else {
      localStorage.removeItem(this.info.id)
      event.currentTarget.dataset.isfav = "false"
    }
  }

  componentDidMount() {
    if (this.info && localStorage[this.info.id]) {
      this.setState({
        isFav: true,
      })
    }
  }
  
  render() {
    this.info = this.props.info && this.props.info;

    return (
      <div className="card">
        <Film setFav={this.setFav} isFetched={this.props.isFetched} isFav={this.state.isFav} info={this.info} />
      </div>
    )
  }
}

export default FilmCard;
