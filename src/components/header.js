import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav style={{ backgroundColor: '#810173' }}>
                <div className="nav-wrapper">
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">
                                <i className="material-icons left">home</i>Home
                        </Link>
                        </li>
                        <li>
                            <Link to="/events">
                                <i className="material-icons left">view_module</i>Events Manager
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
