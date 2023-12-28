// Import Semua Component disini Seperti gambar, halaman, plugin, dan lain-lain

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';

import Navbar from './components/Navbar';
import ProductosLista from './components/ProductosLista';
import Details from './components/Details';
import Cart from './components/Carrito';
import Acceder from './components/Acceder';
import Default from './components/Default';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      {}
      <Navbar/>
      {}
      <Switch>
        <Route exact path="/" component={ProductosLista} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/acceder" component={Acceder} />
        <Route component={Default} />
      </Switch>
      <Modal/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
