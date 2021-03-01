import '../styles/dist/Header.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LoginIcon from './LoginIcon';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import { useAuth0 } from "@auth0/auth0-react";

function injectLoginInfo(Component) {
  const InjectedInfo = function (props) {
    const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
    return <Component {...props} info={{ user, isAuthenticated, isLoading }} />;
  };
  return InjectedInfo;
}

class Header extends Component {
    constructor(props){
      super(props);

      this.info = {};
      this.filmTitle = React.createRef();

      this.state = {
          isAuthenticated: localStorage.isAuthenticated || "false",
      }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleChange(this.filmTitle.current.value);
    }

    componentDidUpdate() {
        if (this.state.isAuthenticated != this.props.info.isAuthenticated && !this.props.info.isLoading) {
            this.setState({isAuthenticated: this.props.info.isAuthenticated});
            localStorage.isAuthenticated = this.props.info.isAuthenticated;  
        }
        if (this.props.info.isAuthenticated  && !this.props.info.isLoading) {
            localStorage.nickname =  this.props.info.user.nickname;
            localStorage.email = this.props.info.user.email;
        }
    }

    render() {
        return (
         <header className="header" >
             <div className="header__wrapper  section__wrapper">
                <Link to="/" className="header__logo header__link">
                    <span className="header__logo_accent">LOVE</span>
                    FILMS
                </Link>

                <div className="header__controls">
                    <form className="header__form" onSubmit={this.handleSubmit}>
                        <input className="header__search" type="text" placeholder="Search by name" ref={this.filmTitle}/>
                    </form>

                    { localStorage.isAuthenticated == "true" ? <div className="header__profile_avatar"><span></span></div> : <LoginIcon onClick={this.props.loginWithRedirect}/> }

                    <div className="header__menu_wrapper">
                        <div className="header__menu_arrow"></div>

                        <ul className="header__menu">
                            { localStorage.isAuthenticated == "true" ? <LogoutLink /> : <LoginLink /> }  
                        </ul>
                    </div>  
                </div>
            </div>
         </header>
        )
    }
}

export default injectLoginInfo(Header);