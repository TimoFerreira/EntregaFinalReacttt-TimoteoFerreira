import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid text-center pb-5">
                <hr className="my-5" />
                <small className="text-muted">todos los derechos reservados. <a target="_blank" className="link-warning mx-1" href="https://www.instagram.com/timo_ferreira">Timoteo Ferreira</a> © 2023 |
                </small>
            </div>
        );
    }
}

export default Footer;