import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercas pt-5">
                        <h1 className="display-3 text-title ">404</h1>
                        <h1>Error</h1>
                        <h4>Pagina no encontrada</h4>
                        <p>El siguiente URL No funciona</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;