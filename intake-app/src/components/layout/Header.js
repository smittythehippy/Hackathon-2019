import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';
function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/DoNotShelter"></a>
                        </li>
                        <li className="nav-item active">
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Resources</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/DoNotShelter">Do Not Shelter List</a>
                                <a className="dropdown-item" href="/referrals">Referrals</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="http://rcaa.org/youth-service-bureau">RCAA Website</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

const headerStyle = {
    background: "#333",
    color: '#fff',
    textAlign: "center",
    padding: "10px"
}

export default Header