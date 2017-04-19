import React, { Component } from 'react';
import './bootstrap.css';
import { Link } from 'react-router';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                                <span className="sr-only">Tournament</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Brand</a>
                        </div>
                        <div className="navbar-collapse collapse in" id="bs-example-navbar-collapse-1" aria-expanded="true">
                            <ul className="nav navbar-nav">
                                <li><Link to="tournaments">Tournament <span className="sr-only"></span></Link></li>
                                <li><Link to="teams">Team</Link></li>
                                <li><Link to="players">Player</Link></li>
                                <li><Link to="heros">Hero</Link></li>
                                <li><Link to="maps">Map</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
export default Menu;