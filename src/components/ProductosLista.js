import React, { Component } from 'react';
import Product from './Productos';
import Title from './Titulo';
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
const title = 'Tienda';
class ProductosLista extends Component {
    render() {
        return (
            <React.Fragment>
                
            <Helmet>
                <title>Tienda</title>
            </Helmet>
                {/* Carousel */}
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item ">
                            <img src="https://layoutmag.com/wp-content/uploads/2020/05/amd-o-intel.jpg.webp" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://ru.aorus.com/upload/Product/F_20201230135856TD1906.JPG" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.banifox.com/imagenes/img_contenido/portada_item/a/kingston-fury.jpg" className="d-block w-100" alt="poster"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.banifox.com/imagenes/img_contenido/portada_item/a/aorus-z790-new.jpg" className="d-block w-100" alt="poster"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
                {/* Carousel */}
                <div className="py-5">
                    <div className="container">
                        <Title name="" title="productos"/>
                        <div className="row justify-content-center products-container">

                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductosLista;