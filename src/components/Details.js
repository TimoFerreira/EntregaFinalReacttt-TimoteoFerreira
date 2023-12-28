import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import {Link} from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row justify-content-center">
                                <div className="col-10 col-md-6 my-3 text-center">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                                <div className="col-10 text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                    <h4 className="text-uppercase text-muted mt-3 mb-2"><span>{company}</span></h4>
                                    <h4 className="text-blue mb-5"><strong>USD {price}</strong></h4>
                                    <hr />
                                    <p className="text-capitalize font-weight-bold my-5">Informacion del producto</p>
                                    <p className="text-muted lead mb-5">
                                        {info}
                                    </p>
                                    <hr />
                                    <div>
                                        <Link to='/'>
                                            <button type="button" className="btn btn-secondary btn-sm">Volver</button>
                                        </Link>
                                        <button type="button" className="btn text-yellow btn-sm ms-2"
                                        cart 
                                        disabled = {inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >{inCart ? "En el carrito" : "Agregar al carrito"}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;