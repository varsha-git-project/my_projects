import React from 'react';
import { Routes , Route } from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';

const App = () =>
{
  return(<>
  <Header />
  <Routes>
    <Route exact path='/' element = { <Home/> }/>
    <Route  path='/about' element = {<About/>}/>
    <Route  path='/contact' element = {<Contact/>}/>
    <Route  path='/products' element = {<Products/>}/>
    <Route  path='/cart' element = {<Cart/>}/>
    <Route  path='/checkout' element = {<Checkout/>}/>
  </Routes>
  <Footer />
  </>);
}

export default App;