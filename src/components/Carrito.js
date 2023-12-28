import React, { Component } from 'react';
import Title from './Titulo';
import CartColumn from './CartColumn';
import CartList from './CartList';
import CartTotal from './CartTotal';
import EmptyCart from './CarritoVacio';
import { ProductConsumer } from '../Context';

class Carrito extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="Tu" title="carrito"></Title>
                                    <CartColumn />
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <EmptyCart />
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Carrito;