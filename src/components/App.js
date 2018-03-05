import React, {Component} from 'react';
import '../styles/App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TopNavBar from "./TopNavBar";
import Home from "./Home";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <TopNavBar/>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Home}/>

                </div>
            </Router>
        );
    }
}