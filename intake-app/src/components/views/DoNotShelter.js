import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
class DoNotShelter extends Component {
    render() {
        return (
            <div>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul>
                    <li>John Doe</li>
                    <li>Karl Doe</li>
                    <li>Jane Do</li>
                    <li>Joe Doe</li>
                    <li>Loe Doe</li>
                    <li>Kae Doe</li>
                    <li>Jae Doe</li>
                    <li>Pete Doe</li>
                    <li>Oliver Doe</li>
                </ul>
            </div>
        );
    }
}
export default DoNotShelter
export { DoNotShelter }